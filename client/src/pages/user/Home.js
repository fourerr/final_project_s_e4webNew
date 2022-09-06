import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import {useNavigate} from "react-router-dom";
import http from "../../http";
import "../Layout/Aside";
import "../Layout/index";
import "../Layout/Header";
import Aside from "../Layout/Aside";
import { Box, Typography } from "@mui/material";
import FacebookRounded from "@mui/icons-material/FacebookRounded";
import current from "../../assets/images/credit-cardT.svg";
import currentTM from "../../assets/images/credit-cardTM.svg";
import loan from "../../assets/images/loanMain.svg";
import loanT from "../../assets/images/loanMainT.svg"; //convertMoney
import convert from "../../assets/images/convertMoney.svg"; //convertMoney
import convertT from "../../assets/images/convertMoneyT.svg"; //convertMoney
import transfer from "../../assets/images/transfer.svg"; //convertMoney
import transferT from "../../assets/images/transferT.svg"; //convertMoney


import myAxios from "../../axios";
import MoneyTable from "../admin/MoneyTable";
function Documents() {
  const [totalExpenses, setTotalExpenses] = useState();
  useEffect(() => {
    async function getUserExpenses() {
      try {
        let response = await http.get("/users/totalExpenses/", {});
        console.log(response.total);
        setTotalExpenses(response.total);
      } catch (e) {
        console.log(e);
      }
    }
    getUserExpenses();
  }, []);

  const HomeItem = ({ icon, iconHover, label, color, bgColor }) => {
    let navigate = useNavigate()
    const [hover, setHover] = React.useState(false);
    return (
      <Box
        flexDirection={"column"}
        display="flex"
        className="home_icon_container"
        justifyContent={"space-evenly"}
        alignItems={"center"}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => navigate("/")}
      >
        <img className="home_icon" src={hover ? iconHover : icon} />
        <label>
          <b style={{ color: color }}>{label}</b>
        </label>
      </Box>
    );
  };

  //console.log(data);

  const labelStyle = {
    color: "white",
    padding: "16px",
    fontSize: "24px",
  };
  return (
    <div className="home">
      <Box
        className="home_top_left"
        flexDirection={"row"}
        display="flex"
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        <HomeItem
          icon={loan}
          iconHover={loanT}
          label="Apply for a loan"
          color="white"
          onClick="/current"
        />
        <HomeItem
          icon={convert}
          iconHover={convertT}
          label="Convert Money"
          color="#13340E"
        />
        <HomeItem
          icon={transfer}
          iconHover={transferT}
          label="Money Transfers"
          color="blue"
        />
      </Box>

      <Box className="home_top_right">
        <Box>
          {totalExpenses && (
            <Typography style={labelStyle}>
              Total expenses: {totalExpenses}
            </Typography>
          )}
        </Box>
      </Box>
      <Box className="home_bottom" style={{ padding: 5, maxHeight: 280 }}>
        <MoneyTable />
      </Box>
    </div>
  );
}
export default Documents;
