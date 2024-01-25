import SearchInput from "../../components/search/SearchInput";
import ProfileBar from "../../components/search/ProfileBar";
import { Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Search = () => {
  const { searchedUsers } = useSelector((state) => state.service);
  
  return (
    <>
      <SearchInput />
      <Stack flexDirection={"column"} gap={1} mb={5}>
        {searchedUsers ? (
          searchedUsers.length > 0 ? (
            searchedUsers.map((e) => {
              return <ProfileBar key={e._id} e={e} />;
            })
          ) : (
            <Typography variant="h6" textAlign={"center"} mb={5}>
              Start searching !
            </Typography>
          )
        ) : null}
      </Stack>
    </>
  );
};

export default Search;
