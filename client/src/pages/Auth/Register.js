import React from 'react';

import {Button, Stack, TextField, Typography } from "@mui/material";

function Register() {
  return (
    <Stack direction="column" spacing={4} alignItems="center" justifyContent="center" sx={{width:1}}>
        <Typography variant='h4'>Register</Typography>
        <TextField
            variant='outlined'
            label="Full Name"
        />
        <TextField
            variant='outlined'
            label="Username"
        />
        <TextField
            variant='outlined'
            label="Password"
        />
        <Button variant='contained'>Register</Button>
    </Stack>
  )
}

export default Register;
