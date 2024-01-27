import { useEffect, useState, memo, useCallback, lazy, Suspense } from "react";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addPostId, toggleMyMenu } from "../../redux/slice";
import { IoIosMore } from "react-icons/io";
import Loading from "../common/Loading";
const PostOne = lazy(() => import("./post/PostOne"));
const PostTwo = lazy(() => import("./post/PostTwo"));

const Post = ({ e }) => {
  const { darkMode, myInfo } = useSelector((state) => state.service);

  const [isAdmin, setIsAdmin] = useState();

  const _300 = useMediaQuery("(min-width:300px)");
  const _400 = useMediaQuery("(min-width:400px)");
  const _700 = useMediaQuery("(min-width:700px)");

  const dispatch = useDispatch();

  const handleOpenMenu = (event) => {
    dispatch(addPostId(e._id));
    dispatch(toggleMyMenu(event.currentTarget));
  };

  const checkIsAdmin = useCallback(() => {
    if (e?.admin._id === myInfo._id) {
      setIsAdmin(true);
      return;
    }
    setIsAdmin(false);
  }, [e, myInfo?._id]);

  useEffect(() => {
    checkIsAdmin();
  }, [checkIsAdmin]);

  return (
    <>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        borderBottom={"3px solid rgb(200, 200, 200)"}
        p={_700 ? 2 : _400 ? 1 : "5px"}
        mx={"auto"}
        sx={{
          ":hover": {
            cursor: "pointer",
            boxShadow: _700
              ? "10px 10px 10px gray , -10px -10px 10px gray"
              : "",
          },
          transition: "all ease-in-out 0.3s",
        }}
        width={_700 ? "70%" : _300 ? "90%" : "100%"}
      >
        <Stack flexDirection={"row"} gap={_700 ? 2 : _300 ? 1 : 1}>
          <Suspense fallback={<Loading />}>
            <PostOne e={e} />
            <PostTwo e={e} />
          </Suspense>
        </Stack>
        <Stack
          flexDirection={"row"}
          justifyContent={"center"}
          gap={1}
          fontSize={"1rem"}
        >
          <Typography
            variant="p"
            color={darkMode ? "white" : "GrayText"}
            fontSize={"1rem"}
            position={"relative"}
            top={2}
          >
            24h
          </Typography>
          {isAdmin ? (
            <IoIosMore size={_700 ? 28 : 20} onClick={handleOpenMenu} />
          ) : (
            <IoIosMore size={_700 ? 28 : 20} />
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default memo(Post);
