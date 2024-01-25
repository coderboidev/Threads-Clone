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
import { useEffect, useRef, useState } from "react";
import { useUpdateProfileMutation } from "../../redux/service";
import Loading from "../common/Loading";

const EditProfile = () => {
  const { openEditProfileModal, myInfo } = useSelector(
    (state) => state.service
  );

  const [updateProfile, updateProfileData] = useUpdateProfileMutation();

  const [pic, setPic] = useState();
  const [bio, setBio] = useState();

  const _700 = useMediaQuery("(min-width:700px)");

  const dispatch = useDispatch();
  const imgRef = useRef();

  const handleClose = () => {
    dispatch(editProfileModel(false));
  };

  const handlePhoto = () => {
    imgRef.current.click();
  };

  const handleUpdate = async () => {
    if (pic || bio) {
      const formData = new FormData();
      formData.append("text", bio);
      formData.append("media", pic);
      await updateProfile(formData);
    }
    dispatch(editProfileModel(false));
  };

  useEffect(() => {
    if (updateProfileData.isSuccess) {
      alert(updateProfileData.data.msg);
    }
    if (updateProfileData.isError) {
      alert(updateProfileData.error.data.msg);
    }
  }, [updateProfileData.isError, updateProfileData.isSuccess]);

  return (
    <>
      <Dialog
        open={openEditProfileModal === true ? true : false}
        onClose={handleClose}
        fullWidth
        fullScreen={_700 ? false : true}
      >
        {updateProfileData?.isLoading ? (
          <Stack height={"60vh"}>
            <Loading />
          </Stack>
        ) : (
          <>
            <Box
              position={"absolute"}
              top={20}
              right={20}
              onClick={handleClose}
            >
              <RxCross2 size={28} />
            </Box>
            <DialogTitle textAlign={"center"} mb={5}>
              Edit Profile
            </DialogTitle>
            <DialogContent>
              <Stack flexDirection={"column"} gap={1}>
                <Avatar
                  src={
                    pic
                      ? URL.createObjectURL(pic)
                      : myInfo
                      ? myInfo.profilePic
                      : ""
                  }
                  alt={myInfo ? myInfo.userName : ""}
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
                  onClick={handlePhoto}
                >
                  Change
                </Button>
                <input
                  type="file"
                  className="file-input"
                  accept="image/*"
                  ref={imgRef}
                  onChange={(e) => setPic(e.target.files[0])}
                />
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
                  value={myInfo ? myInfo.userName : ""}
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
                  value={myInfo ? myInfo.email : ""}
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
                  placeholder={myInfo ? myInfo.bio : ""}
                  value={bio ? bio : myInfo ? myInfo.bio : ""}
                  onChange={(e) => setBio(e.target.value)}
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
                onClick={handleUpdate}
              >
                Update
              </Button>
            </DialogContent>
          </>
        )}
      </Dialog>
    </>
  );
};

export default EditProfile;
