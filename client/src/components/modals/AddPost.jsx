import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { FaImages } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addPostModal } from "../../redux/slice";
import { RxCross2 } from "react-icons/rx";

const AddPost = () => {
  const { openAddPostModal } = useSelector((state) => state.service);

  const _700 = useMediaQuery("(min-width:700px)");
  const _500 = useMediaQuery("(min-width:500px)");

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(addPostModal(false));
  };

  return (
    <>
      <Dialog
        open={openAddPostModal === true ? true : false}
        onClose={handleClose}
        fullWidth
        fullScreen={_700 ? false : true}
      >
        <Box position={"absolute"} top={20} right={20} onClick={handleClose}>
          <RxCross2 size={28} className="image-icon" />
        </Box>
        <DialogTitle textAlign={"center"} mb={5}>
          New Thread...
        </DialogTitle>
        <DialogContent>
          <Stack flexDirection={"row"} gap={2} mb={5}>
            <Avatar src="" alt="" />
            <Stack>
              <Typography variant="h6" fontWeight={"bold"} fontSize={"1rem"}>
                Salman_Khan
              </Typography>
              <textarea
                cols={_500 ? 40 : 25}
                rows={2}
                className="text1"
                placeholder="Start a thread..."
              />
              {/* <img src="/error-bg.png" alt="" id="url-img" /> */}
              <FaImages size={28} className="image-icon" />
              <input type="file" accept="image/*" className="file-input" />
            </Stack>
          </Stack>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {" "}
            <Typography variant="h6" fontSize={"1rem"} color={"gray"}>
              Anyone can reply
            </Typography>
            <Button
              size="large"
              sx={{
                bgcolor: "GrayText",
                color: "white",
                borderRadius: "10px",
                ":hover": { bgcolor: "gray", cursor: "pointer" },
              }}
            >
              Post
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddPost;
