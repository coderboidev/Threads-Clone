import { Stack, Typography, useMediaQuery } from "@mui/material";
import { FaRegHeart, FaRegComment, FaRetweet, FaHeart } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  useLikePostMutation,
  useRepostMutation,
} from "../../../redux/service";
import { useEffect, useState } from "react";

const PostTwo = ({ e }) => {
  const { darkMode, myInfo } = useSelector((state) => state.service);

  const [likePost] = useLikePostMutation();
  const [repost, repostData] = useRepostMutation();

  const [isLiked, setIsLiked] = useState();

  const _300 = useMediaQuery("(min-width:300px)");
  const _400 = useMediaQuery("(min-width:400px)");
  const _500 = useMediaQuery("(min-width:500px)");
  const _700 = useMediaQuery("(min-width:700px)");

  const handleLike = async () => {
    await likePost(e?._id)
      .unwrap()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const checkIsLiked = () => {
    if (e?.likes.length > 0) {
      if (e.likes.filter((ele) => ele._id === myInfo._id).length > 0) {
        setIsLiked(true);
        return;
      }
    }
    setIsLiked(false);
  };

  const handleRepost = async () => {
    await repost(e._id);
  };

  useEffect(() => {
    checkIsLiked();
  }, [e]);

  useEffect(() => {
    if (repostData.isSuccess) {
      console.log(repostData.data.msg);
    }
    if (repostData.isError) {
      console.log(repostData.error.data.msg);
    }
  }, [repostData.isSuccess, repostData.isError]);

  return (
    <>
      <Stack flexDirection={"column"} justifyContent={"space-between"}>
        <Stack flexDirection={"column"} gap={2}>
          <Stack flexDirection={"column"}>
            <Typography
              variant="h6"
              fontSize={_400 ? "1rem" : _300 ? "1rem" : "0.8rem"}
              fontWeight={"bold"}
            >
              {e ? e.admin.userName : ""}
            </Typography>
            <Link to={`/post/${e?._id}`} className="link">
              <Typography
                variant="9"
                fontSize={
                  _700 ? "1.2rem" : _400 ? "1rem" : _300 ? "0.9rem" : "0.8rem"
                }
                className={darkMode ? "mode" : ""}
              >
                {e ? e.text : ""}
              </Typography>
            </Link>
          </Stack>
          {e ? (
            e.media ? (
              <img
                src={e.media}
                alt=""
                width={
                  _700
                    ? "400px"
                    : _500
                    ? "350px"
                    : _400
                    ? "250px"
                    : _300
                    ? "180px"
                    : "150px"
                }
                height={"auto"}
              />
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </Stack>
        <Stack flexDirection={"column"} gap={1}>
          <Stack flexDirection={"row"} gap={2} m={1}>
            {isLiked ? (
              <FaHeart size={_700 ? 32 : _300 ? 28 : 24} onClick={handleLike} />
            ) : (
              <FaRegHeart
                size={_700 ? 32 : _300 ? 28 : 24}
                onClick={handleLike}
              />
            )}
            <Link to={`/post/${e?._id}#comment`} className="link">
              <FaRegComment size={_700 ? 32 : _300 ? 28 : 24} />
            </Link>
            <FaRetweet
              size={_700 ? 32 : _300 ? 28 : 24}
              onClick={handleRepost}
            />
            <IoMdSend size={_700 ? 32 : _300 ? 28 : 24} />
          </Stack>
          <Link to={`/post/${e?._id}`} className="link">
            <Stack
              flexDirection={"row"}
              gap={1}
              position={"relative"}
              top={-3}
              left={4}
            >
              {e ? (
                e.likes.length > 0 ? (
                  <Typography
                    variant="p"
                    color={darkMode ? "white" : '"GrayText"'}
                    fontSize={_700 ? "1.1rem" : _400 ? "1rem" : "1rem"}
                  >
                    {e.likes.length} likes .
                  </Typography>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
              {e ? (
                e.comments.length > 0 ? (
                  <Typography
                    variant="p"
                    color={darkMode ? "white" : '"GrayText"'}
                    fontSize={_700 ? "1.1rem" : _400 ? "1rem" : "1rem"}
                  >
                    {e.comments.length} comments
                  </Typography>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
            </Stack>
          </Link>
        </Stack>
      </Stack>
    </>
  );
};

export default PostTwo;
