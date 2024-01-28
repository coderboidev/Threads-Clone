import { Suspense, lazy } from "react";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Loading from "../../../components/common/Loading";
const Post = lazy(() => import("../../../components/home/Post"));

const Reposts = () => {
  const { user } = useSelector((state) => state.service);
  console.log(user);

  const _700 = useMediaQuery("(min-width:700px)");

  return (
    <Suspense fallback={<Loading />}>
      {user ? (
        user.user ? (
          user.user.reposts.length > 0 ? (
            <Stack
              flexDirection={"column"}
              gap={2}
              mb={10}
              width={_700 ? "800px" : "90%"}
              mx={"auto"}
            >
              {user.user.reposts.map((e) => {
                return <Post key={e._id} e={e} />;
              })}
            </Stack>
          ) : (
            <Typography variant="h6" textAlign={"center"}>
              No Repost yet !
            </Typography>
          )
        ) : (
          <Typography variant="h6" textAlign={"center"}>
            No Repost yet !
          </Typography>
        )
      ) : (
        <Typography variant="h6" textAlign={"center"}>
          No Repost yet !
        </Typography>
      )}
    </Suspense>
  );
};

export default Reposts;
