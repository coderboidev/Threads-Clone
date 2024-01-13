import { Avatar, Stack, Typography, useMediaQuery } from "@mui/material";
import { IoIosMore } from "react-icons/io";
import { useDispatch } from "react-redux";
import { toggleMyMenu } from "../../../redux/slice";

const Comment = () => {
  const _700 = useMediaQuery("(min-width:700px)");

  const dispatch = useDispatch();

  const handleMenu = (e) => {
    dispatch(toggleMyMenu(e.currentTarget));
  };

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
              Salman_Khan
            </Typography>
            <Typography variant="p" fontSize={"0.9rem"}>
              Salman_Khan
            </Typography>
          </Stack>
        </Stack>
        <Stack
          flexDirection={"row"}
          gap={1}
          alignItems={"center"}
          color={"GrayText"}
          fontSize={"0.9rem"}
        >
          <p>24min</p>
          <IoIosMore size={_700 ? 28 : 20} onClick={handleMenu} />
        </Stack>
      </Stack>
    </>
  );
};

export default Comment;
