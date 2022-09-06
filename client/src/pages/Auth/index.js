import React from 'react';

import {Stack, Typography } from "@mui/material";
import Register from './Register';
import Login from './Login';

function Auth(){

    const [isRegister, setIsRegister] = React.useState(false);

    return (
        <Stack direction="column" alignItems="center" justifyContent="center" sx={{width:1,height:"100vh"}}>
            {isRegister ? <Register /> : <Login/>}
            <Typography variant='h6' sx={{mt:5}}>
                to {isRegister ? "Login" : "Register"}
                &nbsp;
                <span 
                    onClick={() => setIsRegister(!isRegister)}
                    className="my-link"
                >
                    Click!
                </span>
            </Typography>
        </Stack>
    )
}
export default Auth;
