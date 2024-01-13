import { Menu, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleMyMenu } from "../../redux/slice";

const MyMenu = () => {
  const { anchorE2 } = useSelector((state) => state.service);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleMyMenu(null));
  };

  return (
    <>
      <Menu
        anchorEl={anchorE2}
        open={anchorE2 !== null ? true : false}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default MyMenu;
