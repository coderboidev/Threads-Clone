import { Menu, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleColorMode, toggleMainMenu } from "../../redux/slice";
import { useLogoutMeMutation } from "../../redux/service";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

const MainMenu = () => {
  const { anchorE1, myInfo } = useSelector((state) => state.service);

  const [logoutMe, logoutMeData] = useLogoutMeMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    dispatch(toggleMainMenu(null));
  };

  const handleToggleTheme = () => {
    handleClose();
    dispatch(toggleColorMode());
  };

  const handleLogout = async () => {
    handleClose();
    await logoutMe();
  };

  useEffect(() => {
    if (logoutMeData.isSuccess) {
      toast.warning(logoutMeData.data.msg, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      navigate("/");
      window.location.reload();
    }

    if (logoutMeData.isError) {
      toast.error(logoutMeData.error.data.msg, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  }, [logoutMeData.isSuccess, logoutMeData.isError]);

  return (
    <>
      <Menu
        anchorEl={anchorE1}
        open={anchorE1 !== null ? true : false}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleToggleTheme}>Toggle Theme</MenuItem>
        <Link to={`profile/threads/${myInfo?._id}`} className="link">
          <MenuItem onClick={handleClose}>My account</MenuItem>
        </Link>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default MainMenu;
