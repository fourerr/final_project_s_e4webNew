import React from "react";
import { useQuery } from "react-query";
import http from '../../http'

function Documents() {

    const {data,status} = useQuery("users", async ()=> await http.get("/users/"))
    //console.log(data);
    return (
        <div>Confirm Documents</div>
    )
}
export default Documents;