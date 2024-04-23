import React from "react";
import { useStyles } from "./styles";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.content}>
                <Box className={classes.categoryList}>
                    <Link to="/anime" className={classes.link}>
                        <Typography className={classes.category}>
                            Anime
                        </Typography>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default Navbar;