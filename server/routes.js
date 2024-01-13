const express = require("express");
const {
  signIn,
  login,
  userDetails,
  allUsers,
  followUser,
} = require("./controllers/user-controller");
const {
  addPost,
  allPost,
  deletePost,
  likePost,
} = require("./controllers/post-controller");
const auth = require("./middlewares/auth");
const {
  addComment,
  deleteComment,
} = require("./controllers/comment-controller");
const router = express.Router();

router.post("/signin", signIn);
router.post("/login", login);

router.get("/user/:id", auth, userDetails);
router.get("/users", auth, allUsers);
router.put("/user/follow/:id", auth, followUser);

router.post("/post", auth, addPost);
router.get("/post", auth, allPost);
router.delete("/post/:id", auth, deletePost);
router.put("/post/like/:id", auth, likePost);

router.post("/comment/:id", auth, addComment);
router.delete("/comment/:postId/:id", auth, deleteComment);

module.exports = router;
