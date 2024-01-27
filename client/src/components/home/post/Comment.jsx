import { memo, useEffect, useState } from "react";
import {
  Avatar,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { IoIosMore } from "react-icons/io";
import { useSelector } from "react-redux";
import {
  useDeleteCommentMutation,
  useSinglePostQuery,
} from "../../../redux/service";
import { Bounce, toast } from "react-toastify";

const Comment = ({ e, postId }) => {
  const { darkMode, myInfo } = useSelector((state) => state.service);

  const [anchorEl, setAnchorEl] = useState(null);
  const [isAdmin, setIsAdmin] = useState();

  const _700 = useMediaQuery("(min-width:700px)");

  const [deleteComment, deleteCommentData] = useDeleteCommentMutation();
  const { refetch } = useSinglePostQuery(postId);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteComment = async () => {
    const info = {
      postId,
      id: e?._id,
    };
    await deleteComment(info);
    handleClose();
    refetch();
  };

  const checkIsAdmin = () => {
    if (e && myInfo) {
      if (e.admin._id === myInfo._id) {
        setIsAdmin(true);
        return;
      }
    }
    setIsAdmin(false);
  };

  useEffect(() => {
    checkIsAdmin();
  }, [e]);

  useEffect(() => {
    if (deleteCommentData.isSuccess) {
      toast.success(deleteCommentData.data.msg, {
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
    if (deleteCommentData.isError) {
      toast.error(deleteCommentData.error.data.msg, {
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
  }, [deleteCommentData.isError, deleteCommentData.isSuccess]);

  return (
    <>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        px={2}
        pb={4}
        borderBottom={"1px solid gray"}
        mx={"auto"}
        width={"90%"}
      >
        <Stack flexDirection={"row"} gap={_700 ? 2 : 1}>
          <Avatar src="" alt="" />
          <Stack flexDirection={"column"}>
            <Typography variant="h6" fontWeight={"bold"} fontSize={"0.9rem"}>
              {e ? e.admin.userName : ""}
            </Typography>
            <Typography variant="p" fontSize={"0.9rem"}>
              {e ? e.text : ""}
            </Typography>
          </Stack>
        </Stack>
        <Stack
          flexDirection={"row"}
          gap={1}
          alignItems={"center"}
          color={darkMode ? "whitesmoke" : "GrayText"}
          fontSize={"0.9rem"}
        >
          <p>24min</p>
          {isAdmin ? (
            <IoIosMore
              size={_700 ? 28 : 20}
              onClick={(e) => setAnchorEl(e.currentTarget)}
            />
          ) : (
            <IoIosMore size={_700 ? 28 : 20} />
          )}
        </Stack>
      </Stack>
      <Menu
        anchorEl={anchorEl}
        open={anchorEl !== null ? true : false}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleDeleteComment}>Delete</MenuItem>
      </Menu>
    </>
  );
};

export default memo(Comment);
