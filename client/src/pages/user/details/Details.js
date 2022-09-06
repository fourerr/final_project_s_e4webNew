import React from "react";
import { useQuery } from "react-query";
import http from '../../../http'
import UsersTable from "../../admin/UsersTable2";
//import ChangeDetails from "./ChangeDetails";
import UsersTable2 from "../../admin/UsersTable2";


function Documents() {

    const {data,status} = useQuery("users", async ()=> await http.get("/users/"))
    //console.log(data);
    return (
        <UsersTable2>
            
        </UsersTable2>
    )
}
export default Documents;