import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import http from "../../http";

import {
  Box,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EditUser from "./EditUser";
import AddUser from "./AddUser";
import BasicModal from "./BasicModal";
import "./UsersTable.css";

function UsersTable() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState();

  useEffect(() => {
    const getUsers = async () => {
      const users = await http.get("/users/");
      setUsers(users);
    };
    getUsers();
  }, [editUser]);

  const deleteUser = async (id) => {
    await http.delete(`/users/${id}`);
    setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
  };
  return (
    <>
      <EditUser
        open={editUser ? true : false}
        editUser={editUser}
        setEditUser={setEditUser}
      />

      <BasicModal />
      <Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow className="tr_users_head">
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Number Acount</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Button</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.length &&
                users.map((user, index) => {
                  return (
                    <TableRow
                      key={user._id}
                      className={`tr_users_${
                        index % 2 == 0 ? "primary" : "primary2"
                      }`}
                    >
                      <TableCell>{user.first_name}</TableCell>
                      <TableCell>{user.last_name}</TableCell>
                      <TableCell>{user.num_acount}</TableCell>
                      <TableCell>{user.city}</TableCell>
                      <TableCell>
                        <IconButton>
                          <InfoIcon color="primary2" fontSize="large" />
                        </IconButton>
                        <IconButton onClick={() => deleteUser(user._id)}>
                          <DeleteIcon color="primary" fontSize="large" />
                        </IconButton>
                        <IconButton>
                          <EditIcon
                            onClick={() => setEditUser(user)}
                            color="primary"
                            fontSize="large"
                          />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
export default UsersTable;
