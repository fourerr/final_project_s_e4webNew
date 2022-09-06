import React from "react";
import { Outlet } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import Header from "./Header";
import Aside from "./Aside";
import Footer from "./Footer";
import Context from "../Context";

function Layout() {
  const { isManager } = React.useContext(Context);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    if (isManager) {
      setItems([1, 12]);
    } else {
      setItems([1, 12, 10, 22]);
    }
  }, []);
  return (
    <Box sx={{ width: 1 }}>
      <Box component={"header"}>
        <Header setItems={setItems} />
      </Box>
      <Box component={"aside"}>
        <Aside items={items} />
      </Box>
      <Box sx={{ width: 1, pt: "150px", pl: "200px", pr: "50px" }}>
        <Box component={"main"}>
          <Outlet />
        </Box>
      </Box>

      <Box component={"footer"} className="footer_container">
        <Footer />
      </Box>
    </Box>
  );
}
export default Layout;
