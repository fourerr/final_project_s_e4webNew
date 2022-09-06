import React from "react";
import { useQuery } from "react-query";
import http from '../../http'
import {Button, Stack, TextField, Typography,Select,MenuItem } from "@mui/material";

function ConvertMoney() {
    const balance=32;
    const {data,status} = useQuery("users", async ()=> await http.get("/users/"))
    const [date, setDate] = React.useState("");
    const [convert,setConvert] = React.useState("");
    const commitBtn = async() => {
        try { 
            let res = await http.post("/convertmoney", {convert});
            console.log(res);
            alert('succeed operation');
        } catch (error) {
            console.log(error);
        }  
    return (
        <Stack direction="column" spacing={4}  alignItems="left"  sx={{width:1}}>
            <Typography variant='h4'> Convert money:</Typography>
            <TextField 
               disabled
               id="outlined-disabled"
               label="Balance"
               defaultValue={balance}
            />
            <Select
                    label="options"
                    id="outlined-disabled"
                >
            <MenuItem  value={10}>US</MenuItem>
            <MenuItem value={20}>ILS</MenuItem>
            <MenuItem value={30}>LEV</MenuItem>
            </Select>
            <TextField
            defaultValue={balance*0.95}
            variant='outlined'
            label="Balance after converation"
            onChange={(e) => setConvert(e.target.value)}
             />
            <Button variant='contained' onClick={commitBtn} >Commit</Button>
        </Stack>
      )
}
}
export default ConvertMoney;
