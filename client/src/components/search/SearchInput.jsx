import { useEffect, useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useLazySearchUsersQuery } from "../../redux/service";
import { addToSearchedUsers } from "../../redux/slice";
import { Bounce, toast } from "react-toastify";

const SearchInput = () => {
  const { darkMode } = useSelector((state) => state.service);

  const [query, setQuery] = useState();

  const [searchUser, searchUserData] = useLazySearchUsersQuery();

  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      if (query) {
        await searchUser(query);
      }
    }
  };

  useEffect(() => {
    if (searchUserData.isSuccess) {
      dispatch(addToSearchedUsers(searchUserData.data.users));
      toast.success(searchUserData.data.msg, {
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
    if (searchUserData.isError) {
      toast.error(searchUserData.error.data.msg, {
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
  }, [searchUserData.isSuccess, searchUserData.isError]);

  return (
    <>
      <TextField
        sx={{
          width: "90%",
          maxWidth: "750px",
          boxShadow: "5px 5px 5px gray",
          borderRadius: "15px",
          px: 2,
          py: 1,
          my: 5,
          mx: "auto",
          "& .MuiOutlinedInput-root": {
            color: darkMode ? "whitesmoke" : "black",
            "& fieldset": {
              border: "none",
            },
          },
        }}
        placeholder="Search user..."
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{ color: darkMode ? "whitesmoke" : "black" }}
            >
              <FaSearch />
            </InputAdornment>
          ),
        }}
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={handleSearch}
      />
    </>
  );
};

export default SearchInput;
