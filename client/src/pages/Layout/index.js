import { Outlet } from "react-router-dom"
import { Box } from "@mui/material";

import Header from "../../components/Header"
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"
import { useStyles } from "./styles";

const Layout = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Header />
            <Navbar />
            <Box className={classes.content}>
                <Outlet />
            </Box>
            <Footer />
        </Box>
    );
};

export default Layout;