import { Input, TextField, Box, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "../../axios";

function Documents() {
  //   const { data, status } = useQuery(
  //     "users",
  //     async () => await http.get("/users/")
  //   );
  //   const [user, setUsers] = useState({});

  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [secNewPass, setSecNewPass] = useState("");

  const onSubmit = async () => {
    if (oldPass == "" || newPass == "" || secNewPass == "") return;

    if (newPass === secNewPass) {
      try {
        let res = await axios.put("/users/changepass", { oldPass, newPass });
        console.log(res)
      } catch (error) {console.log(error)}
    }
  };

  //   useEffect(() => {
  //     const getUsers = async () => {
  //       const users = await http.get("/users/spec");
  //       setUsers(users[0]);
  //     };
  //     getUsers();
  //   }, []);

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={console.log}
    >
      <TextField
      type="password"
        onChange={(e) => setOldPass(e.target.value)}
        id="oldPass"
        label="Old password"
        variant="standard"
      />
      <TextField
        onChange={(e) => setNewPass(e.target.value)}
        id="newPass"
        label="Old password"
        variant="standard"
      />
      <TextField
        onChange={(e) => setSecNewPass(e.target.value)}
        id="secNewPass"
        label="Old password"
        variant="standard"
      />
      <Button onClick={onSubmit}>Change Password</Button>
    </Box>
  );
}
export default Documents;
