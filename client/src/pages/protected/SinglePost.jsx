import { Stack } from "@mui/material";
import Post from "../../components/home/Post";
import Comment from "../../components/home/post/Comment";

const SinglePost = () => {
  return (
    <>
      <Stack flexDirection={"column"} my={5} gap={2}>
        <Post />
        <Stack flexDirection={"column"} gap={2} width={"100%"}>
          <Comment />
          <Comment />
          <Comment />
        </Stack>
      </Stack>
    </>
  );
};

export default SinglePost;
