import React from "react";
import { useMutation } from "react-query";

import { Box, TextField, Button, LinearProgress, Alert } from "@mui/material";
import Grid from '@mui/material/Grid';
import http from "../../http";

function AddUser() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [first_name, setFirst_Name] = React.useState("");
  const [last_name, setLast_name] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [id_number, setId_number] = React.useState("");
  const [bank_name, setBank_name] = React.useState("");
  const [id_bank, setId_bank] = React.useState("");
  const [num_acount, setNum_acount] = React.useState("");
  const [role, setRole] = React.useState("");

  const mutation = useMutation((user) => {
    return http.post("/users", user);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      username,
      password,
      first_name,
      last_name,
      address,
      city,
      id_number,
      bank_name,
      id_bank,
      num_acount,
      role,
    });
  };

  if (mutation.isLoading) {
    return <LinearProgress />;
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}>
      
      {mutation.isError && <Alert severity="error">Error</Alert>}
      {mutation.isSuccess && <Alert severity="success">Success</Alert>}
      
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        
      />
      <TextField
        label="First Name"
        value={first_name}
        onChange={(e) => setFirst_Name(e.target.value)}
      />

      <TextField
        label="Last name"
        value={last_name}
        onChange={(e) => setLast_name(e.target.value)}
      />

      <TextField
        label="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <TextField
        label="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <TextField
        label="Id number"
        value={id_number}
        onChange={(e) => setId_number(e.target.value)}
      />

      <TextField
        label="Bank name"
        value={bank_name}
        onChange={(e) => setBank_name(e.target.value)}
      />

      <TextField
        label="Id bank"
        value={id_bank}
        onChange={(e) => setId_bank(e.target.value)}
      />

      <TextField
        label="Num acount"
        value={num_acount}
        onChange={(e) => setNum_acount(e.target.value)}
      />

      <TextField
        label="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <Button type="submit">Add User</Button>
    </Box>
  );
}

export default AddUser;
