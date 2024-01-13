import {
  Button,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";

const Register = () => {
  const _550 = useMediaQuery("(min-width:700px)");

  const [login, setLogin] = useState(false);

  const toggleLogin = () => {
    setLogin((pre) => !pre);
  };

  return (
    <>
      <Stack
        width={"100%"}
        height={"100vh"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={
          _550
            ? {
                backgroundImage: 'url("/register-bg.webp")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 600px",
              }
            : null
        }
      >
        <Stack
          flexDirection={"column"}
          width={_550 ? "40%" : "90%"}
          gap={2}
          mt={_550 ? 20 : 0}
        >
          <Typography
            variant="h5"
            fontSize={_550 ? "1.5rem" : "1rem"}
            fontWeight={"bold"}
            alignSelf={"center"}
          >
            {login ? "Login with email" : "Register with email"}
          </Typography>
          {login ? null : (
            <TextField
              variant="outlined"
              placeholder="Enter your Username..."
            />
          )}
          <TextField variant="outlined" placeholder="Enter your email..." />
          <TextField variant="outlined" placeholder="Enter your password..." />
          <Button
            size="large"
            sx={{
              width: "100%",
              height: 52,
              bgcolor: "green",
              color: "white",
              fontSize: "1rem",
              ":hover": {
                cursor: "pointer",
                bgcolor: "blue",
              },
            }}
          >
            {login ? "Login" : " Sign up"}
          </Button>
          <Typography
            variant="p"
            alignSelf={"center"}
            fontSize={_550 ? "1.3rem" : "1rem"}
          >
            {login ? "Don`t have an account ?" : "Already have an account ?"}{" "}
            <span className="login-link" onClick={toggleLogin}>
              {login ? "Sign up" : "Login"}
            </span>
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Register;
