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
import { useDispatch, useSelector } from "react-redux";
import { editProfileModel } from "../../redux/slice";
import { RxCross2 } from "react-icons/rx";

const EditProfile = () => {
  const { openEditProfileModal } = useSelector((state) => state.service);

  const _700 = useMediaQuery("(min-width:700px)");

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(editProfileModel(false));
  };
  
  return (
    <>
      <Dialog
        open={openEditProfileModal === true ? true : false}
        onClose={handleClose}
        fullWidth
        fullScreen={_700 ? false : true}
      >
        <Box position={"absolute"} top={20} right={20} onClick={handleClose}>
          <RxCross2 size={28} />
        </Box>
        <DialogTitle textAlign={"center"} mb={5}>
          Edit Profile
        </DialogTitle>
        <DialogContent>
          <Stack flexDirection={"column"} gap={1}>
            <Avatar
              src=""
              alt=""
              sx={{ width: 96, height: 96, alignSelf: "center" }}
            />
            <Button
              size="large"
              sx={{
                border: "2px solid gray",
                borderRadius: "10px",
                width: 96,
                height: 40,
                alignSelf: "center",
                my: 2,
                ":hover": { cursor: "pointer" },
              }}
            >
              Change
            </Button>
            <input type="file" className="file-input" accept="image/*" />
            <Typography
              variant="p"
              fontWeight={"bold"}
              fontSize={"1.2rem"}
              my={2}
            >
              User Name :{" "}
            </Typography>
            <input
              type="text"
              value={"Salman_Khan"}
              readOnly
              className="text1"
            />
          </Stack>
          <Stack flexDirection={"column"} gap={1}>
            <Typography variant="p" fontWeight={"bold"} fontSize={"1.2rem"}>
              Email :{" "}
            </Typography>
            <input
              type="text"
              value={"salman@gmail.com"}
              readOnly
              className="text1"
            />
          </Stack>
          <Stack flexDirection={"column"} gap={1}>
            <Typography variant="p" fontWeight={"bold"} fontSize={"1.2rem"}>
              Bio :{" "}
            </Typography>
            <input
              type="text"
              className="text1"
              placeholder={"This is bio demo..."}
            />
          </Stack>
          <Button
            size="large"
            sx={{
              border: "2px solid gray",
              borderRadius: "10px",
              bgcolor: "GrayText",
              width: "100%",
              color: "white",
              my: 2,
              fontSize: "1.2rem",
              ":hover": { cursor: "pointer", bgcolor: "gray" },
            }}
          >
            Done
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditProfile;
