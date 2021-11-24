import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { getAuthState, loginUser } from "../../features/Auth/AuthSlice";

const Login = () => {
  const [user, setUser] = useState({
    username: "mor_2314",
    password: "83r5^_",
  });

  const dispatch = useDispatch();

  const authState = useSelector(getAuthState);

  const navigate = useNavigate();

  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

  // console.log(from, authState);

  useEffect(() => {
    authState.auth && navigate(from.pathname);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState.auth]);

  const handleChange = (type, value) => {
    setUser({ ...user, [type]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
  };

  return (
    <div className="Login">
      <Box
        sx={{
          width: "60%",
          height: "50vh",
          background: "whitesmoke",
          margin: "30px auto 0  auto",
        }}
        mt={10}
        paddingX={3}
        component="form"
        onSubmit={submitHandler}
      >
        <Typography
          display="flex"
          justifyContent="center"
          variant="h2"
          gutterBottom
        >
          Login
        </Typography>

        <TextField
          type="text"
          fullWidth
          label="username"
          id="fullWidth"
          margin="normal"
          value={user.username}
          onChange={(e) => {
            handleChange("username", e.target.value);
          }}
        />

        <TextField
          type="password"
          fullWidth
          label="password"
          id="fullWidth2"
          margin="normal"
          value={user.password}
          onChange={(e) => {
            handleChange("password", e.target.value);
          }}
        />

        <Button
          type="submit"
          color="success"
          variant="outlined"
          fullWidth
          size="medium"
          disabled={!user.username || !user.password}
        >
          Login
        </Button>
      </Box>
    </div>
  );
};

export default Login;
