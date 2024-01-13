const Comment = require("../models/comment-model");
const Post = require("../models/post-model");

exports.addComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    if (!id) {
      return res.status(400).json({ msg: "No id is provided !" });
    }
    if (!text) {
      return res.status(400).json({ msg: "No text is added in comment !" });
    }
    const postExists = await Post.findById(id);
    if (!postExists) {
      return res.status(400).json({ msg: "No such post !" });
    }
    const comment = new Comment({
      text,
      admin: req.user._id,
    });
    const newComment = await comment.save();
    await Post.findByIdAndUpdate(
      id,
      {
        $push: { comments: newComment._id },
      },
      { new: true }
    );
    res.status(201).json({ msg: "Commented !" });
  } catch (err) {
    res.status(400).json({ msg: "Error in addComment !", err: err.message });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const { postId, id } = req.params;
    if (!postId || !id) {
      return res.status(400).json({ msg: " id or postId is not provided !" });
    }
    const postExists = await Post.findById(postId);
    if (!postExists) {
      return res.status(400).json({ msg: "No such post !" });
    }
    const commentExists = await Comment.findById(id);
    if (!commentExists) {
      return res.status(400).json({ msg: "No such comment !" });
    }
    if (postExists.comments.includes(id)) {
      const isAuthorized = commentExists.admin === req.user._id;
      if (!isAuthorized) {
        return res
          .status(400)
          .json({ msg: "You are not authorized to delete comment !" });
      }
      await Post.findByIdAndUpdate(
        postId,
        {
          $pull: { comments: id },
        },
        { new: true }
      );
      await Comment.findByIdAndDelete(id);
      return res.status(201).json({ msg: "Comment deleted !" });
    }
    res.status(400).json({ msg: "This post does not include the comment" });
  } catch (err) {
    res.status(400).json({ msg: "Error in addComment !", err: err.message });
  }
};
