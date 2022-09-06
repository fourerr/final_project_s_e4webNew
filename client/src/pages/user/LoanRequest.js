import React from "react";
import { useQuery } from "react-query";
import http from '../../http'
import {Button, Stack, TextField, Typography } from "@mui/material";

function LoanRequest() {

    const {data,status} = useQuery("users", async ()=> await http.get("/users/"))
    const [date, setDate] = React.useState("");
    const [sum,setSum] = React.useState("");

    //console.log(data);
    const commitBtn = async() => {
        try { 
            let res = await http.post("/loans", {date,sum});
            console.log(res);
            alert('succeed operation');
        } catch (error) {
            console.log(error);
        }  
    }
    return (
        <Stack direction="column" spacing={4}  alignItems="left"  sx={{width:1}}>
            <Typography variant='h4'>Loan details:</Typography>
            <TextField 
                variant='outlined'
                label="date"
                type={"date"}
                onChange={(e) => setDate(e.target.value)}
            />
            <TextField
                variant='outlined'
                label="amount"
                onChange={(e) => setSum(e.target.value)}
            />
            
            <Button variant='contained' onClick={commitBtn} >Commit</Button>
        </Stack>
      )
}
export default LoanRequest;