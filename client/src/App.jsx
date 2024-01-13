import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import Search from "./pages/protected/Search";
import Home from "./pages/protected/Home";
import ProtectedLayout from "./pages/protected/ProtectedLayout";
import ProfileLayout from "./pages/protected/profile/ProfileLayout";
import Threads from "./pages/protected/profile/Threads";
import Replies from "./pages/protected/profile/Replies";
import Reposts from "./pages/protected/profile/Reposts";
import SinglePost from "./pages/protected/SinglePost";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/re" element={<Register />} />
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
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
