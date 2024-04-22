import React from "react";
import { useStyles } from "./styles";
import { Box } from "@mui/material";

const Footer = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.content}>
                Footer Placeholder
            </Box>
        </Box>
    );
};

export default Footer;
