import { memo } from "react";
import {
  Avatar,
  Button,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileBar = ({ e }) => {
  const { darkMode } = useSelector((state) => state.service);

  const _700 = useMediaQuery("(min-width:700px)");

  return (
    <>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        px={1}
        py={2}
        mx={"auto"}
        boxShadow={"5px 5px 5px gray"}
        width={_700 ? "80%" : "90%"}
        borderRadius={"15px"}
        sx={{ ":hover": { cursor: "pointer" } }}
      >
        <Stack flexDirection={"row"} gap={2}>
          <Avatar src={e ? e.profilePic : ""} alt={e ? e.userName : ""} />
          <Stack flexDirection={"column"} gap={0.6}>
            <Link to={`/profile/threads/${e?._id}`} className="link">
              <Typography
                variant="h6"
                fontWeight={"bold"}
                fontSize={_700 ? "1rem" : "0.9rem"}
              >
                {e ? e.userName : ""}
              </Typography>
            </Link>
            <Typography
              variant="p"
              fontSize={_700 ? "1.1rem" : "0.75rem"}
              color={"gray"}
            >
              {e ? e.bio : ""}
            </Typography>
            <Typography variant="p" fontSize={_700 ? "1rem" : "0.9rem"}>
              {e ? e.followers.length : "0"} followers
            </Typography>
          </Stack>
        </Stack>
        <Link to={`/profile/threads/${e?._id}`}>
          <Button
            size="medium"
            sx={{
              border: "1px solid gray",
              borderRadius: "10px",
              color: darkMode ? "whitesmoke" : "black",
              p: 2,
              height: 40,
            }}
          >
            Follow
          </Button>
        </Link>
      </Stack>
    </>
  );
};

export default memo(ProfileBar);
