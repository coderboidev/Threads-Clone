const User = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const formidable = require("formidable");
const cloudinary = require("cloudinary");

exports.signIn = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
      return res
        .status(400)
        .json({ msg: "userName , email & password are required !" });
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ msg: "Email already registered . Please Login !" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    if (!hashedPassword) {
      return res.status(400).json({ msg: "Error while hashing password !" });
    }
    const user = new User({
      userName,
      email,
      password: hashedPassword,
    });
    const result = await user.save();
    if (!result) {
      return res.status(400).json({ msg: "Error while saving user !" });
    }
    const accessToken = jwt.sign(
      { token: result._id },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );
    if (!accessToken) {
      return res
        .status(400)
        .json({ msg: "Error while generating accessToken !" });
    }
    res.cookie("token", accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    res.status(201).json({ msg: "User signed in successfully !" });
  } catch (err) {
    res.status(400).json({ msg: "Error in signIn !", err: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: " email & password are required !" });
    }
    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res.status(400).json({ msg: " Please Sign in first !" });
    }
    const passwordMatched = await bcrypt.compare(password, userExists.password);
    if (!passwordMatched) {
      return res.status(400).json({ msg: "Incorrect credentials !" });
    }
    const accessToken = jwt.sign(
      { token: userExists._id },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );
    if (!accessToken) {
      return res
        .status(400)
        .json({ msg: "Error while generating accessToken !" });
    }
    res.cookie("token", accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    res.status(201).json({ msg: "User Logged in successfully !" });
  } catch (err) {
    res.status(400).json({ msg: "Error in login !", err: err.message });
  }
};

exports.userDetails = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ msg: "id is not passed in userDetails !" });
    }
    const user = await User.findById(id)
      .select("-password")
      .populate("followers")
      .populate("threads")
      .populate("replies")
      .populate("reposts");
    res.status(200).json({ msg: "User details fetched !", user });
  } catch (err) {
    res.status(400).json({ msg: "Error in userDetails !", err: err.message });
  }
};

exports.allUsers = async (req, res) => {
  try {
    const { page } = req.query;
    let pageNumber = page;
    if (!page || page === undefined) {
      pageNumber = 1;
    }
    const users = await User.find({})
      .skip((pageNumber - 1) * 3)
      .limit(3)
      .select("-password")
      .populate("followers");
    res.status(200).json({ msg: "Users fetched !", users });
  } catch (err) {
    res.status(400).json({ msg: "Error in allUsers !", err: err.message });
  }
};

exports.followUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ msg: "No id is provided !" });
    }
    const userExists = await User.findById(id);
    if (!userExists) {
      return res.status(400).json({ msg: "No such user found !" });
    }
    if (userExists.followers.includes(req.user._id)) {
      await User.findByIdAndUpdate(
        userExists._id,
        {
          $pull: { followers: req.user._id },
        },
        { new: true }
      );
      return res
        .status(201)
        .json({ msg: `unfollowed ${userExists.userName} !` });
    }
    await User.findByIdAndUpdate(
      userExists._id,
      {
        $push: { followers: req.user._id },
      },
      { new: true }
    );
    res.status(201).json({ msg: `following ${userExists.userName} !` });
  } catch (err) {
    res.status(400).json({ msg: "Error in followUser !", err: err.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const form = formidable({});
    const userExists = await User.findById(req.user._id);
    if (!userExists) {
      return res.status(400).json({ msg: "No such user exists !" });
    }
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(400).json({ msg: "Error in form parse !", err: err });
      }
      if (fields.text) {
        await User.findByIdAndUpdate(
          req.user._id,
          { bio: fields.text },
          { new: true }
        );
      }
      if (files.media) {
        if (userExists.public_id) {
          await cloudinary.v2.uploader.destroy(
            userExists.public_id,
            (error, result) => {
              console.log({ error, result });
            }
          );
        }
        const uploadedImage = await cloudinary.v2.uploader.upload(
          files.media.filepath,
          { folder: "Threads_Clone/Profiles" }
        );
        if (!uploadedImage) {
          return res.status(400).json({ msg: "Error in cloudinary upload !" });
        }
        await User.findByIdAndUpdate(
          req.user._id,
          {
            profilePic: uploadedImage.secure_url,
            public_id: uploadedImage.public_id,
          },
          { new: true }
        );
      }
    });
    res.status(201).json({ msg: "Profile updated !" });
  } catch (err) {
    res.status(400).json({ msg: "Error in updateProfile !", err: err.message });
  }
};
