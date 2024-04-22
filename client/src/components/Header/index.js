import React from "react";
import { useStyles } from "./styles";
import { Box, Typography } from "@mui/material";

const Header = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.content}>
                <Typography className={classes.title} variant="h5">MyAnimeLite</Typography>
                <Box className={classes.user}>
                    User Name
                </Box>
            </Box>
        </Box>
    );
};

export default Header;