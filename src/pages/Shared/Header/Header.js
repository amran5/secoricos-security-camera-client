import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ backgroundColor: 'rgba(7,7,25, 0.8)' }} position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        Secoricos
                    </Typography>
                    <NavLink to="home" style={{ textDecoration: "none", color: "white", marginRight: 20 }}>Home</NavLink>
                    <NavLink to="dashboard" style={{ textDecoration: "none", color: "white" }}>Dashboard</NavLink>
                    <NavLink style={{ textDecoration: "none", color: "white", marginLeft: 20 }} to="/login">Login</NavLink>
                    <NavLink style={{ textDecoration: "none", color: "white", marginLeft: 20 }} to="/register">Register</NavLink>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;