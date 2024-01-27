import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useMyInfoQuery } from "./redux/service";
import Loading from "./components/common/Loading";
const Error = lazy(() => import("./pages/Error"));
const Search = lazy(() => import("./pages/protected/Search"));
const Home = lazy(() => import("./pages/protected/Home"));
const ProtectedLayout = lazy(() => import("./pages/protected/ProtectedLayout"));
const Threads = lazy(() => import("./pages/protected/profile/Threads"));
const Replies = lazy(() => import("./pages/protected/profile/Replies"));
const Reposts = lazy(() => import("./pages/protected/profile/Reposts"));
const SinglePost = lazy(() => import("./pages/protected/SinglePost"));
const Register = lazy(() => import("./pages/Register"));
const ProfileLayout = lazy(() =>
  import("./pages/protected/profile/ProfileLayout")
);

const App = () => {
  const { darkMode } = useSelector((state) => state.service);

  const { data } = useMyInfoQuery();

  return (
    <>
      <Box minHeight={"100vh"} className={darkMode ? "mode" : ""}>
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <Routes>
              {data ? (
                <Route exact path="/" element={<ProtectedLayout />}>
                  <Route exact path="" element={<Home />} />
                  <Route exact path="post/:id" element={<SinglePost />} />
                  <Route exact path="search" element={<Search />} />
                  <Route exact path="profile/" element={<ProfileLayout />}>
                    <Route exact path="threads/:id" element={<Threads />} />
                    <Route exact path="replies/:id" element={<Replies />} />
                    <Route exact path="reposts/:id" element={<Reposts />} />
                  </Route>
                </Route>
              ) : (
                <Route exact path="/" element={<Register />} />
              )}
              <Route path="*" element={<Error />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Box>
    </>
  );
};

export default App;
