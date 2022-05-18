import React from 'react';
import { AccountCircleSharp, ExitToApp, SearchOutlined, VideocamOutlined } from "@material-ui/icons";
import { AppBar, Drawer, Toolbar, Typography,CssBaseline, Divider} from "@mui/material";
import Box from '@mui/material/Box';
import { Outlet } from "react-router-dom";
import useStyles from './Stylebar';

var drawerWidth = 80;

const SidebarA = () => {
  const classes = useStyles()

  return (
    <Box sx={{ display: 'flex', backgroundColor: 'rgba(238, 238, 238, 1)'}}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h7" color='white'>
                    Komorebi Connect
                </Typography>
                <div className={classes.account}>
                    <AccountCircleSharp fontSize="large" htmlColor="white"/>
                    <div>
                        <Typography variant="h7" marginLeft="15px" marginRight="15px" color='white'>
                            Axel González Carreto
                        </Typography>
                        <br/>
                        <Typography variant="h7" marginLeft="15px" marginRight="15px" fontSize="12px" color='#FF9900'>
                            Amazon Agent
                        </Typography>
                    </div>
                </div>
                <div className={classes.account2}>
                        <AccountCircleSharp fontSize="large" htmlColor="white"/>
                </div>
            </Toolbar>
        </AppBar>
        <Drawer  sx={{
            backgroundColor: "rgba(35, 47, 62, 1)",
            width: drawerWidth,
            flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    backgroundColor: "rgba(35, 47, 62, 1)",
                },
            }} 
            variant="permanent" 
            anchor="left">
            <Toolbar />
            <Divider />
                <div className={classes.item}>
                    <a href="/agent">
                        <div>
                            <SearchOutlined htmlColor="#FF9900" fontSize="large"/>
                        </div>
                        <div>
                            <Typography variant="h7" fontSize="12px" color="white">
                                Search
                            </Typography>
                        </div>
                    </a>
                </div> 
                <div className={classes.item}>
                    <a href="/agent/record">
                        <div>
                            <VideocamOutlined htmlColor="#FF9900" fontSize="large"/>
                        </div>
                        <div>
                            <Typography variant="h7" fontSize="12px" color="white">
                                Record
                            </Typography>
                        </div>
                    </a>
                </div>
                <div className={classes.item2}>
                    <a href="/">
                        <div>
                            <ExitToApp htmlColor="#FF9900" fontSize="large"/>
                        </div>
                        <div>
                            <Typography variant="h7" fontSize="12px" color="white" >
                                Log out
                            </Typography>
                        </div>
                    </a>
                </div>
        </Drawer>
        <Box
            sx={{ flexGrow: 1, p: 3, m: 5, backgroundColor: 'rgba(238, 238, 238, 1)'}}
        >
            <Outlet />
        </Box>
    </Box>
  );
}

export default SidebarA;
