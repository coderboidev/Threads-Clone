import { Suspense, lazy } from "react";
import { Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
const Loading = lazy(() => import("../../components/common/Loading"));
const SearchInput = lazy(() => import("../../components/search/SearchInput"));
const ProfileBar = lazy(() => import("../../components/search/ProfileBar"));

const Search = () => {
  const { searchedUsers } = useSelector((state) => state.service);

  return (
    <Suspense fallback={<Loading />}>
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
    </Suspense>
  );
};

export default Search;
