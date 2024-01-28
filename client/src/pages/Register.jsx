import { useEffect, useState } from "react";
import {
  Button,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useLoginMutation, useSigninMutation } from "../redux/service";
import { Bounce, toast } from "react-toastify";
import Loading from "../components/common/Loading";

const Register = () => {
  const _550 = useMediaQuery("(min-width:700px)");

  const [loginUser, loginUserData] = useLoginMutation();
  const [signupUser, SignupUserData] = useSigninMutation();

  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const toggleLogin = () => {
    setLogin((pre) => !pre);
  };

  const handleLogin = async () => {
    const data = { email, password };
    await loginUser(data)
      .then((result) => alert(result.data.msg))
      .catch((error) => alert(error.data.msg));
  };

  const handleSignup = async () => {
    const data = { userName: username, email, password };
    await signupUser(data);
  };

  useEffect(() => {
    if (loginUserData.isSuccess) {
      toast.success(loginUserData.data.msg, {
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
    if (loginUserData.isError) {
      toast.error(loginUserData.error.data.msg, {
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
  }, [loginUserData.isSuccess, loginUserData.isError]);

  useEffect(() => {
    if (SignupUserData.isSuccess) {
      toast.success(SignupUserData.data.msg, {
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
    if (SignupUserData.isError) {
      toast.success(SignupUserData.error.data.msg, {
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
  }, [SignupUserData.isSuccess, SignupUserData.isError]);

  if (SignupUserData.isLoading) {
    return (
      <Stack justifyContent={"center"} textAlign={"center"} height={"90vh"}>
        <Loading />
      </Stack>
    );
  }

  if (loginUserData.isLoading) {
    return (
      <Stack justifyContent={"center"} textAlign={"center"} height={"90vh"}>
        <Loading />
      </Stack>
    );
  }

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
              onChange={(e) => setUsername(e.target.value)}
            />
          )}
          <TextField
            variant="outlined"
            placeholder="Enter your email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
          />
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
            onClick={login ? handleLogin : handleSignup}
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
