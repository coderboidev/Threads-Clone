import { Stack } from "@mui/material";
import Comment from "../../../components/home/post/Comment";

const Replies = () => {
  return (
    <>
      <Stack flexDirection={"column"} gap={2} mb={10}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </Stack>
    </>
  );
};

export default Replies;
