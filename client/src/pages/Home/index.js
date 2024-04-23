import React from "react";
import { Box } from "@mui/material";

import AnimePreviewCarousel from "../../components/AnimePreviewCarousel";
import { useStyles } from "./styles";

const Home = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <AnimePreviewCarousel headerText="New Anime" />
            <AnimePreviewCarousel headerText="Upcoming Anime" />
            <AnimePreviewCarousel headerText="Top Anime" />
        </Box>

    );
};

export default Home;
