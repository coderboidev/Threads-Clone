import { InputAdornment, TextField } from "@mui/material";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
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
            "& fieldset": {
              border: "none",
            },
          },
        }}
        placeholder="Search user..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FaSearch />
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default SearchInput;
