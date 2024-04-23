import React, { useEffect } from "react";
import { Box } from "@mui/material";

import AnimePreviewCarousel from "../../components/AnimePreviewCarousel";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import { selectDashboardAnimeList } from "../../slice/myAnimeListSlice.selector";
import useMalApiHelper from "../../hooks/useMalApiHelper";

const Home = () => {
    const classes = useStyles();
    const dashboardAnimeList = useSelector(selectDashboardAnimeList);
    const { newList, upcomingList, topList } = dashboardAnimeList;
    const { onGetDashboardAnimeList } = useMalApiHelper();

    useEffect(() => {
        onGetDashboardAnimeList();
    }, []);


    return (
        <Box className={classes.root}>
            <AnimePreviewCarousel headerText="New Anime" data={newList} />
            <AnimePreviewCarousel headerText="Upcoming Anime" data={upcomingList} />
            <AnimePreviewCarousel headerText="Top Anime" data={topList} />
        </Box>

    );
};

export default Home;
