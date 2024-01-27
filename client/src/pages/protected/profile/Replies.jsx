import { Suspense, lazy } from "react";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Loading from "../../../components/common/Loading";
const Comment = lazy(() => import("../../../components/home/post/Comment"));

const Replies = () => {
  const { user } = useSelector((state) => state.service);

  const _700 = useMediaQuery("(min-width:700px)");

  return (
    <>
      <Stack
        flexDirection={"column"}
        gap={2}
        width={_700 ? "800px" : "90%"}
        mx={"auto"}
      >
        <Suspense fallback={<Loading />}>
          {user ? (
            user.user ? (
              user.user.replies.length > 0 ? (
                user.user.replies.map((e) => {
                  return <Comment key={e._id} e={e} postId={e.post} />;
                })
              ) : (
                <Typography textAlign={"center"} variant="h6">
                  No Replies yet !
                </Typography>
              )
            ) : null
          ) : null}
        </Suspense>
      </Stack>
    </>
  );
};

export default Replies;
