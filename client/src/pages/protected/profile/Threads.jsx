import { Suspense, lazy } from "react";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Loading from "../../../components/common/Loading";
const Post = lazy(() => import("../../../components/home/Post"));

const Threads = () => {
  const { user } = useSelector((state) => state.service);

  const _700 = useMediaQuery("(min-width:700px)");

  return (
    <Suspense fallback={<Loading/>}>
      {user ? (
        user.user ? (
          user.user.threads.length > 0 ? (
            <Stack
              flexDirection={"column"}
              gap={2}
              mb={10}
              width={_700 ? "800px" : "90%"}
              mx={"auto"}
            >
              {user.user.threads.map((e) => {
                return <Post e={e} key={e._id} />;
              })}
            </Stack>
          ) : (
            <Typography variant="h6" textAlign={"center"}>
              No Thread yet !
            </Typography>
          )
        ) : (
          ""
        )
      ) : (
        ""
      )}
    </Suspense>
  );
};

export default Threads;
