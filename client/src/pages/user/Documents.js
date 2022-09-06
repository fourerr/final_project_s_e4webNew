import { Grid, Button } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import http from '../../http'

function Documents() {

    const {data,status,refetch} = useQuery("files", async ()=> await http.get("/files"))
    

    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Button variant='contained' type='upload' component="label" >העלאת קובץ
                    <input
                        onChange={async (e) => {
                            const formData = new FormData();
                            formData.append('file', e.target.files[0]);
                            try {
                                let res = await http.post("/files", formData);
                                refetch()
                            } catch (error) {
                                console.log(error);
                            }
                        }}
                        name="uploaded_file"
                        type="file"
                        hidden
                    /></Button>
            </Grid>
            <Grid item xs={12}>
                <ul>
                    {status == 'success' && data.map((f,i) => <li key={i}>from: {f.source} - {f.name}</li>)}
                </ul>
            </Grid>
        </Grid>
    )
}
export default Documents;