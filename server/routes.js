const express = require("express");
const {
  signIn,
  login,
  userDetails,
  allUsers,
  followUser,
  myInfo,
  logout,
  updateProfile,
  searchUser,
} = require("./controllers/user-controller");
const {
  addPost,
  allPost,
  deletePost,
  likePost,
  repost,
  singlePost,
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
router.get("/users/search/:query", auth, searchUser);  
router.put("/user/follow/:id", auth, followUser);  
router.get("/me", auth, myInfo);  
router.put("/update", auth, updateProfile);  
router.post("/logout", auth, logout);  

router.post("/post", auth, addPost);  
router.put("/repost/:id", auth, repost);  
router.get("/post", auth, allPost);  
router.get("/post/:id", auth, singlePost);  
router.delete("/post/:id", auth, deletePost);  
router.put("/post/like/:id", auth, likePost);  

router.post("/comment/:id", auth, addComment);
router.delete("/comment/:postId/:id", auth, deleteComment);

module.exports = router;
