import React from "react";
import { Box } from "@mui/material";

import { useStyles } from "./styles";

const AnimeList = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            AnimeList
        </Box>
    );
};

export default AnimeList;
