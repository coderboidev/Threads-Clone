import { InputAdornment, TextField } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";

const SearchInput = () => {
  const { darkMode } = useSelector((state) => state.service);
  return (
    <>
      <TextField
        sx={{
          width: "90%",
          boxShadow: "5px 5px 5px gray",
          borderRadius: "15px",
          px: 2,
          py: 1,
          my: 5,
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
      />
    </>
  );
};

export default SearchInput;
