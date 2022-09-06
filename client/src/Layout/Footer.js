import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRounded from "@mui/icons-material/FacebookRounded";
import Twitter from "@mui/icons-material/Twitter";
import LinkedIn from "@mui/icons-material/LinkedIn";
function Footer() {
  const iconStyle = { width: "40px", height: "40px", color: "black" };
  return (
    <Box className="footer">
      <Box
        className="social_media"
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        columnGap={"8px"}
      >
        <InstagramIcon style={iconStyle} />
        <FacebookRounded style={iconStyle} />
        <Twitter style={iconStyle} />
        <LinkedIn style={iconStyle} />
      </Box>
      <Box className="copyrights">
        <Typography>All rights reserved App @2022</Typography>
      </Box>
      <Box className="footer_right">
        <ul>
          <li>Lorem Ipsom 1</li>
          <li>Lorem Ipsom 1</li>
          <li>Lorem Ipsom 1</li>
          <li>Lorem Ipsom 1</li>
        </ul>
      </Box>
    </Box>
  );
}
export default Footer;
