import { Suspense, lazy, useCallback, useEffect, useState } from "react";
import { Stack, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import { useAddCommentMutation, useSinglePostQuery } from "../../redux/service";
import { Bounce, toast } from "react-toastify";

const Loading = lazy(() => import("../../components/common/Loading"));
const Comment = lazy(() => import("../../components/home/post/Comment"));
const Post = lazy(() => import("../../components/home/Post"));

const SinglePost = () => {
  const params = useParams();

  const [comment, setComment] = useState();

  const { data, refetch } = useSinglePostQuery(params.id);
  const [addComment, addCommentData] = useAddCommentMutation();

  const handleAddComment = async (e) => {
    if (data && e.key === "Enter") {
      const info = {
        id: data.post._id,
        text: comment,
      };
      await addComment(info);
    }
  };
  
  useEffect(() => {
    if (addCommentData.isSuccess) {
      setComment();
      refetch();
      toast.success(addCommentData.data.msg, {
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
    if (addCommentData.isError) {
      toast.error(addCommentData.error.data.msg, {
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
  }, [addCommentData.isSuccess, addCommentData.isError]);

  return (
    <Suspense fallback={<Loading />}>
      <Stack flexDirection={"column"} my={5} gap={2}>
        <Post e={data?.post} />
        <Stack flexDirection={"column"} gap={2} width={"80%"} mx={"auto"}>
          {data
            ? data.post.comments.map((e) => {
                return <Comment key={e._id} e={e} postId={data?.post._id} />;
              })
            : null}
        </Stack>
        <TextField
          variant="outlined"
          autoFocus
          placeholder="Comment here..."
          id="comment"
          sx={{ width: "50%", mx: "auto", my: 5, p: 1 }}
          onChange={(e) => setComment(e.target.value)}
          onKeyUp={handleAddComment}
          value={comment ? comment : ""}
        />
      </Stack>
    </Suspense>
  );
};

export default SinglePost;
