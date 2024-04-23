import React from "react";
import { Box, Tooltip, Typography } from "@mui/material";

import { useStyles } from "./styles";

const AnimePreview = ({ src, name, id }) => {
    const classes = useStyles();

    return (
        <Box className={classes.root} key={id}>
            <Box
                className={classes.preview}
                component="img"
                src={src}
                alt={name}
            />
            <Tooltip title={name} arrow>
                <Typography className={classes.details}>{name}</Typography>
            </Tooltip>
        </Box>
    );
};

export default AnimePreview;
