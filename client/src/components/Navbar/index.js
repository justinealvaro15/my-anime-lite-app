import React from "react";
import { useStyles } from "./styles";
import { Box, Typography } from "@mui/material";
import { HEADER_SEARCH_CATEGORIES } from "./constants";

const Navbar = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.content}>
                <Box className={classes.categoryList}>
                    {HEADER_SEARCH_CATEGORIES.map((category) => (
                        <Typography className={classes.category} key={category}>
                            {category}
                        </Typography>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Navbar;