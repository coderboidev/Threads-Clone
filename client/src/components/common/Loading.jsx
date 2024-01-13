import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <>
      <Stack
        flexDirection={"row"}
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <CircularProgress color="success" />
      </Stack>
    </>
  );
};

export default Loading;
