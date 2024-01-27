import { useEffect } from "react";
import { Menu, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleMyMenu } from "../../redux/slice";
import { useDeletePostMutation } from "../../redux/service";
import { Bounce, toast } from "react-toastify";

const MyMenu = () => {
  const { anchorE2, postId } = useSelector((state) => state.service);

  const dispatch = useDispatch();

  const [deletePost , deletePostData] = useDeletePostMutation();

  const handleClose = () => {
    dispatch(toggleMyMenu(null));
  };

  const handleDeletePost = async () => {
    dispatch(toggleMyMenu(null));
    await deletePost(postId);
    handleClose();
  };

  useEffect(()=>{
     if (deletePostData.isSuccess) {
       toast.warning(deletePostData.data.msg, {
         position: "top-center",
         autoClose: 2500,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
         transition: Bounce,
       });
     }
     if (deletePostData.isError) {
       toast.error(deletePostData.error.data.msg, {
         position: "top-center",
         autoClose: 2500,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
         transition: Bounce,
       });
     }
  },[deletePostData.isError , deletePostData.isSuccess])

  return (
    <>
      <Menu
        anchorEl={anchorE2}
        open={anchorE2 !== null ? true : false}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleDeletePost}>Delete</MenuItem>
      </Menu>
    </>
  );
};

export default MyMenu;
