import {
  Avatar,
  Button,
  Chip,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { FaInstagram } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import EditProfile from "../../../components/modals/EditProfile";
import { useDispatch } from "react-redux";
import { editProfileModel } from "../../../redux/slice";

const ProfileLayout = () => {
  const _300 = useMediaQuery("(min-width:300px)");
  const _500 = useMediaQuery("(min-width:500px)");

  const dispatch = useDispatch();
  
  const handleOpenEditModal = () => {
    dispatch(editProfileModel(true));
  };

  return (
    <>
      <Stack flexDirection={"column"} gap={2} p={2} my={2}>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack flexDirection={"column"} gap={1}>
            <Typography
              variant="h2"
              fontWeight={"bold"}
              fontSize={_300 ? "2rem" : "1rem"}
            >
              Salman_khan
            </Typography>
            <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
              <Typography variant="h2" fontSize={_300 ? "1rem" : "0.8rem"}>
                Salman_khan
              </Typography>
              <Chip
                label="threads.net"
                size="small"
                sx={{ fontSize: _300 ? "0.8rem" : "0.6rem" }}
              />
            </Stack>
          </Stack>
          <Avatar
            src=""
            alt=""
            sx={{ width: _300 ? 60 : 40, height: _300 ? 60 : 40 }}
          />
        </Stack>
        <Typography variant="subtitle2">Good man</Typography>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="subtitle2" color={"gray"}>
            730 followers
          </Typography>
          <FaInstagram size={_300 ? 40 : 24} />
        </Stack>
      </Stack>
      <Button
        size="large"
        sx={{
          color: "black",
          width: "100%",
          textAlign: "center",
          border: "1px solid gray",
          borderRadius: "10px",
          ":hover": {
            cursor: "pointer",
          },
        }}
        onClick={handleOpenEditModal}
      >
        Edit Profile
      </Button>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-evenly"}
        my={5}
        pb={2}
        borderBottom={"2px solid gray"}
        fontSize={_500 ? "1.2rem" : _300 ? "1.1rem" : "0.9rem"}
      >
        <NavLink to={"/profile/threads/1"} className={"link"}>
          Threads
        </NavLink>
        <NavLink to={"/profile/replies/1"} className={"link"}>
          Replies
        </NavLink>
        <NavLink to={"/profile/reposts/1"} className={"link"}>
          Reposts
        </NavLink>
      </Stack>
      <Outlet />
      <EditProfile />
    </>
  );
};

export default ProfileLayout;
