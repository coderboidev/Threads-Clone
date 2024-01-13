const Post = require("../models/post-model");
const User = require("../models/user-model");
const Comment = require("../models/comment-model");
const cloudinary = require("../config/cloudinary");
const formidable = require("formidable");
const mongoose = require("mongoose");

exports.addPost = async (req, res) => {
  try {
    const form = formidable({});
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(400).json({ msg: "Error in form parse !", err: err });
      }
      const post = new Post();
      if (fields.text) {
        post.text = fields.text;
      }
      if (files.media) {
        const uploadedFile = await cloudinary.v2.uploader.upload(
          files.media.filepath,
          { folder: "Threads_Clone/Posts" }
        );
        if (!uploadedFile) {
          return res
            .status(400)
            .json({ msg: "Error in file upload to cloudinary !" });
        }
        post.media = uploadedFile.secure_url;
        post.public_id = uploadedFile.public_id;
      }
      post.admin = req.user._id;
      const newPost = await post.save();
      res.status(201).json({ msg: "Post created !", newPost });
    });
  } catch (err) {
    res.status(400).json({ msg: "Error in addPost !", err: err.message });
  }
};

exports.allPost = async (req, res) => {
  try {
    const { page } = req.query;
    let pageNumber = page;
    if (!page || page === undefined) {
      pageNumber = 1;
    }
    const posts = await Post.find({})
      .sort({ updatedAt: -1 })
      .skip((pageNumber - 1) * 3)
      .limit(3)
      .populate("admin")
      .populate("likes")
      .populate({
        path: "comments",
        populate: {
          path: "admin",
          model: "User",
        },
      });
    res.status(200).json({ msg: "Post fetched !", posts });
  } catch (err) {
    res.status(400).json({ msg: "Error in allPost !", err: err.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ msg: "No id is provided !" });
    }
    const postExists = await Post.findById(id);
    if (!postExists) {
      return res.status(400).json({ msg: "No such post is available !" });
    }
    const isPermitted = postExists.admin === req.user._id;
    if (!isPermitted) {
      return res
        .status(400)
        .json({ msg: "You are not authorized to delete this post !" });
    }
    if (postExists.media) {
      await cloudinary.v2.uploader.destroy(
        postExists.public_id,
        (error, result) => {
          console.log({ error, result });
        }
      );
    }
    await Comment.deleteMany({ _id: { $in: postExists.comments } });
    await User.updateMany(
      {
        $or: [
          { threads: mongoose.Types.ObjectId(id) },
          { reposts: mongoose.Types.ObjectId(id) },
          { replies: mongoose.Types.ObjectId(id) },
        ],
      },
      {
        $pull: {
          threads: mongoose.Schema.Types.ObjectId(id),
          reposts: mongoose.Schema.Types.ObjectId(id),
          replies: mongoose.Schema.Types.ObjectId(id),
        },
      },
      { new: true }
    );
    await Post.findByIdAndDelete(postExists._id);
    res.status(201).json({ msg: "Post deleted !" });
  } catch (err) {
    res.status(400).json({ msg: "Error in deletePost !", err: err.message });
  }
};

exports.likePost = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ msg: "No id is provided !" });
    }
    const post = await Post.findById(id);
    if (!post) {
      return res.status(400).json({ msg: "No such post !" });
    }
    if (post.likes.includes(req.user._id)) {
      await Post.findByIdAndUpdate(
        id,
        {
          $pull: { likes: req.user._id },
        },
        { new: true }
      );
      return res.status(201).json({ msg: "Post unliked !" });
    }
    await Post.findByIdAndUpdate(
      id,
      {
        $push: { likes: req.user._id },
      },
      { new: true }
    );
    return res.status(201).json({ msg: "Post liked !" });
  } catch (err) {
    res.status(400).json({ msg: "Error in likePost !", err: err.message });
  }
};
