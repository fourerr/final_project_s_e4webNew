import React from "react";

import { AppBar, Toolbar, Grid, Typography, Stack, Paper, InputBase, IconButton, Divider, Button, Tabs, Tab } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

function Header({setItems}) {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        switch (newValue) {
            case 0:
                setItems([1,12,10,22])
                break;
            case 1:
                setItems([3,26,20,24])
                break;
            case 2:
                setItems([13,18])
                break;
        
            default:
                setItems([1,12,10,22])
                break;
        }
        setValue(newValue);
    };;

    return (
        <AppBar color="secondary" sx={{ zIndex: 1500, height: "10vh", borderRadius: "0 0 24px 24px" }}>
            <Toolbar sx={{ height: 1 }}>
                <Grid container spacing={1} alignItems="center" sx={{ height: 1 }}>

                    <Grid item xs={6} sx={{ height: 1 }}>

                        <Grid container sx={{ height: 1 }}>
                            <Grid item xs={2} sx={{ height: 1 }}>
                                <img src="./images/logo.png" style={{ height: "100%" }} />
                            </Grid>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={6}>
                                <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
                                    <Tab icon={<HomeOutlinedIcon fontSize="large"/>} label="Home" />
                                    <Tab icon={<ForumOutlinedIcon fontSize="large"/>} label="Lev With You" />
                                    <Tab icon={<SettingsOutlinedIcon fontSize="large"/>} label="Settings" />
                                </Tabs>
                            </Grid>
                            <Grid item xs={3}></Grid>
                        </Grid>

                    </Grid>

                    <Grid item xs={2}>
                        <Typography align="center" variant="h5">Eden Cohen</Typography>
                        <Typography align="center" variant="subtitle1">599-12345</Typography>
                    </Grid>

                    <Grid item xs={4}>
                        <Grid container justifyContent="space-between" alignItems="center" sx={{ height: 1 }}>
                            <Grid item xs={6}>
                                <Paper
                                    component="form"
                                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
                                >
                                    <InputBase
                                        sx={{ ml: 1, flex: 1 }}
                                        placeholder="Search.."
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                                        <SearchIcon />
                                    </IconButton>
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Button variant="contained" color="error" sx={{ display: "block", m: "auto" }}
                                onClick={() => {
                                    localStorage.clear();
                                    window.location.replace("/");
                                }}
                                >LogOut</Button>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Toolbar>
        </AppBar >
    )
}
export default Header;