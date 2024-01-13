import { Stack, useMediaQuery } from "@mui/material";
import { GoHome } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { TbEdit } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPostModal } from "../../redux/slice";
import { useEffect, useState } from "react";

const Navbar = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  const _300 = useMediaQuery("(min-width:300px)");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [showArrow, setShowArrow] = useState(false);

  const checkArrow = () => {
    if (window.location.pathname.startsWith("/post/") && _700) {
      setShowArrow(true);
      return;
    }
    setShowArrow(false);
  };

  useEffect(() => {
    checkArrow();
  }, [window.location.pathname]);

  const handleAddPost = () => {
    dispatch(addPostModal(true));
  };

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <>
      <Stack
        flexDirection={"row"}
        maxWidth={"100%"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        {showArrow ? (
          <FiArrowLeft
            size={_300 ? 32 : 24}
            className="image-icon"
            onClick={handleNavigate}
          />
        ) : null}
        <Link to={"/"} className="link">
          <GoHome size={_300 ? 32 : 24} />
        </Link>
        <Link to={"/search"} className="link">
          <IoIosSearch size={_300 ? 32 : 24} />
        </Link>
        <TbEdit
          size={_300 ? 32 : 24}
          onClick={handleAddPost}
          className="image-icon"
        />
        <CiHeart size={_300 ? 32 : 24} />
        <Link to={"/profile/threads/1"} className="link">
          <RxAvatar size={_300 ? 32 : 24} />
        </Link>
      </Stack>
    </>
  );
};

export default Navbar;
