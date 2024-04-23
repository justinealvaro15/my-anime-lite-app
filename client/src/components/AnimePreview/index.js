import React from "react";
import { Box, Tooltip, Typography } from "@mui/material";

import { useStyles } from "./styles";
import { useNavigate } from "react-router-dom";

const AnimePreview = ({ src, name, id }) => {
    const classes = useStyles();
    const navigate = useNavigate();

    const handleTileClick = () => {
        navigate(`/anime/${id}`);
    };

    return (
        <Box className={classes.root} key={id} onClick={handleTileClick}>
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
