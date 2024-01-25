import { Menu, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleMyMenu } from "../../redux/slice";
import { useDeletePostMutation } from "../../redux/service";

const MyMenu = () => {
  const { anchorE2, postId } = useSelector((state) => state.service);

  const dispatch = useDispatch();

  const [deletePost] = useDeletePostMutation();

  const handleClose = () => {
    dispatch(toggleMyMenu(null));
  };

  const handleDeletePost = async () => {
    dispatch(toggleMyMenu(null));
    await deletePost(postId);
    handleClose();
  };

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
