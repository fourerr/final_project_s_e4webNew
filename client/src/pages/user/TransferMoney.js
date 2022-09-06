import React from "react";
import { useQuery } from "react-query";
import http from '../../http'
import {Button, Stack, TextField, Typography } from "@mui/material";

function TransferMoney() {

    const {data,status} = useQuery("users", async ()=> await http.get("/users/"))
    //console.log(data);
    // const [date, setDate] = React.useState("");
    const [sum,setSum] = React.useState("");
    const [id_reciever,setId_reciever] = React.useState("");
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


    const commitBtn = async() => {
        try { 
            let res = await http.post("/transferMoney", {sum,id_reciever});
            console.log(res);
            alert('succeed operation');
        } catch (error) {
            console.log(error);
        }  
    }
    return (
        <Stack direction="column" spacing={4}  alignItems="left"  sx={{width:1}}>
            <Typography variant='h4'>Transfer money details:</Typography>
            <TextField 
               disabled
               id="outlined-disabled"
               label="Current Date"
               defaultValue={date}
            //    onChange={(e) => setDate(e.target.value)}
            />
            <TextField
                variant='outlined'
                label="amount"
                onChange={(e) => setSum(e.target.value)}
            />
            <TextField
            variant='outlined'
            label="id reciever"
            onChange={(e) => setSum(e.target.value)}
             />
            <TextField
            variant='outlined'
            label="id reciever"
            onChange={(e) => setSum(e.target.value)}
             />
            
            
            <Button variant='contained' onClick={commitBtn} >Commit</Button>
        </Stack>
      )
}
export default TransferMoney;