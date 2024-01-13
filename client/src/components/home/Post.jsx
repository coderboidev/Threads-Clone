import { Stack, Typography, useMediaQuery } from "@mui/material";
import PostOne from "./post/PostOne";
import PostTwo from "./post/PostTwo";
import { IoIosMore } from "react-icons/io";
import { useDispatch } from "react-redux";
import { toggleMyMenu } from "../../redux/slice";

const Post = () => {
  const _300 = useMediaQuery("(min-width:300px)");
  const _400 = useMediaQuery("(min-width:400px)");
  const _700 = useMediaQuery("(min-width:700px)");

  const dispatch = useDispatch();

  const handleOpenMenu = (e) => {
    dispatch(toggleMyMenu(e.currentTarget));
  };

  return (
    <>
      <Stack
        flexDirection={"row"}
        border={"2px solid rgb(246, 248, 249)"}
        borderRadius={"20px"}
        p={_700 ? 2 : _400 ? 1 : "5px"}
        mx={"auto"}
        sx={{
          bgcolor: " rgb(246, 248, 249)",
          ":hover": {
            cursor: "pointer",
            boxShadow: _700
              ? "10px 10px 10px gray , -10px -10px 10px gray"
              : "",
          },
          transition: "all ease-in-out 0.3s",
        }}
        maxWidth={"90%"}
      >
        <Stack flexDirection={"row"} gap={_700 ? 2 : _300 ? 1 : 0}>
          <PostOne />
          <PostTwo />
        </Stack>
        <Stack
          flexDirection={"row"}
          justifyContent={"center"}
          gap={1}
          fontSize={"1rem"}
        >
          <Typography
            variant="p"
            color={"GrayText"}
            fontSize={"1rem"}
            position={"relative"}
            top={2}
          >
            24h
          </Typography>
          <IoIosMore size={_700 ? 28 : 20} onClick={handleOpenMenu} />
        </Stack>
      </Stack>
    </>
  );
};

export default Post;
