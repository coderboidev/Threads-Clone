import { Suspense, lazy } from "react";
import { Stack, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Loading from "../../components/common/Loading";
const Header = lazy(() => import("../../components/common/Header"));
const AddPost = lazy(() => import("../../components/modals/AddPost"));
const MainMenu = lazy(() => import("../../components/menu/MainMenu"));
const MyMenu = lazy(() => import("../../components/menu/MyMenu"));

const ProtectedLayout = () => {
  const _700 = useMediaQuery("(min-width:700px)");

  return (
    <Suspense fallback={<Loading />}>
      <Stack
        flexDirection={"column"}
        maxWidth={_700 ? "800px" : "90%"}
        minWidth={"100%"}
        mx={"auto"}
        overflow={"hidden"}
      >
        <Header />
        <AddPost />
        <MainMenu />
        <MyMenu />
        <Outlet />
      </Stack>
    </Suspense>
  );
};

export default ProtectedLayout;
