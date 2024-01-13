import { Grid, Stack, useMediaQuery } from "@mui/material";
import { IoMenu } from "react-icons/io5";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { toggleMainMenu } from "../../redux/slice";

const Header = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  const dispatch = useDispatch();

  const handleOpenMenu = (e) => {
    dispatch(toggleMainMenu(e.currentTarget));
  };

  return (
    <>
      {_700 ? (
        <Stack
          flexDirection={"row"}
          height={52}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <img src="/Threads-logo-white-bg.png" alt="" width={60} height={35} />
          <Stack
            justifyContent={"center"}
            width={"550px"}
            bgcolor={"aliceblue"}
            zIndex={2}
            height={96}
          >
            <Navbar />
          </Stack>
          <IoMenu
            size={36}
            color="gray"
            onClick={handleOpenMenu}
            className="image-icon"
          />
        </Stack>
      ) : (
        <>
          <Stack
            position={"fixed"}
            bottom={0}
            justifyContent={"center"}
            width={"100%"}
            height={52}
            p={1}
            bgcolor={"aliceblue"}
            zIndex={2}
          >
            <Navbar />
          </Stack>
          <Grid
            container
            height={60}
            justifyContent={"flex-end"}
            alignItems={"center"}
            p={1}
          >
            <Grid item xs={6}>
              <img
                src="/Threads-logo-white-bg.png"
                alt=""
                width={60}
                height={35}
              />
            </Grid>
            <IoMenu
              size={36}
              color="gray"
              onClick={handleOpenMenu}
              className="image-icon"
            />
          </Grid>
        </>
      )}
    </>
  );
};

export default Header;
