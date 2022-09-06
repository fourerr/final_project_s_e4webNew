import React from 'react';
import { Outlet } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import Header from './Header';
import Aside from './Aside';
import Footer from './Footer';

function Layout() {
    const [items, setItems] = React.useState([1,12,10,22]);
    return (
        <Box sx={{width:1}}>
            <Box component={"header"}><Header setItems={setItems} /></Box>
            <Box component={"aside"}><Aside items={items} /></Box>
            <Box sx={{width:1, pt:"150px", pl:"200px", pr:"50px"}}>
                <Box component={"main"}><Outlet /></Box>
                <Box component={"footer"}><Footer /></Box>
            </Box>
        </Box>
    )
}
export default Layout;