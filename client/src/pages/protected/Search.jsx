import SearchInput from "../../components/search/SearchInput";
import ProfileBar from "../../components/search/ProfileBar";
import { Stack } from "@mui/material";

const Search = () => {
  return (
    <>
      <SearchInput />
      <Stack flexDirection={"column"} gap={1}>
        <ProfileBar />
        <ProfileBar />
        <ProfileBar />
      </Stack>
    </>
  );
};

export default Search;
