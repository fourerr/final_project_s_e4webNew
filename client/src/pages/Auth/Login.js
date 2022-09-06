import React from "react";

import http from "../../http";
import { Button, Stack, TextField, Typography } from "@mui/material";

import Context from "../../Context";

function Login() {
  const { setIsAuth, setIsManager } = React.useContext(Context);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);

  const loginBtn = async () => {
    try {
      let res = await http.post("/login", { username, password });
      localStorage.setItem("token", res.token);
      if (res && res.role && res.role == "manager") {
        setIsAuth(true);
        setIsManager(true);
      } else {
        setIsManager(false);
        setIsAuth(true);
      }
    } catch (error) {
      return setError(true);
    }
  };

  return (
    <Stack
      direction="column"
      spacing={4}
      alignItems="center"
      justifyContent="center"
      sx={{ width: 1 }}
    >
      <Typography variant="h4">Login</Typography>
      <TextField
        error={error}
        variant="outlined"
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        error={error}
        variant="outlined"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" onClick={loginBtn}>
        Login
      </Button>
    </Stack>
  );
}

export default Login;
