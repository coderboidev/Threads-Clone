import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../../components/common/Header";
import AddPost from "../../components/modals/AddPost";
import MainMenu from "../../components/menu/MainMenu";
import MyMenu from "../../components/menu/MyMenu";

const ProtectedLayout = () => {
  return (
    <>
      <Stack flexDirection={"column"} maxWidth={"800px"} mx={"auto"}>
        <Header />
        <AddPost />
        <MainMenu />
        <MyMenu/>
        <Outlet />
      </Stack>
    </>
  );
};

export default ProtectedLayout;
