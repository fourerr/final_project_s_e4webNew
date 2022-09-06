import React from "react";
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
import "./MoneyTable.css";

function MoneyTable() {
  const { data, status } = useQuery(
    "creditcards",
    async () => await http.get("/creditcards/")
  );

  return (
    <Box>
      <TableContainer style={{ maxHeight: 400 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow className="tr_money_head">
              <TableCell>palce</TableCell>
              <TableCell>sum</TableCell>
              <TableCell>_id</TableCell>
              <TableCell>logo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {status == "success" &&
              data.map((user, index) => {
                return (
                  <TableRow
                    key={user._id}
                    className={`tr_money_${
                      index % 2 == 0 ? "primary" : "primary2"
                    }`}
                  >
                    <TableCell>{user.place}</TableCell>
                    <TableCell>{user.sum}</TableCell>
                    <TableCell>{user._id}</TableCell>
                    <TableCell>
                      <IconButton>
                        <InfoIcon color="primary" fontSize="large" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
export default MoneyTable;
