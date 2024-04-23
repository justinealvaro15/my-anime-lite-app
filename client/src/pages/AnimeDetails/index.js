import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";

import { useStyles } from "./styles";
import { useParams } from "react-router-dom";
import clsx from "clsx";

const AnimeDetails = () => {
    const classes = useStyles();
    let { id } = useParams();


    if (!id) {
        return (
            <Box className={classes.root}>
                Anime not found
            </Box>
        );
    }

    return (
        <Grid flexDirection="column" className={classes.root}>
            <Grid className={classes.header}>
                <Box>
                    <Typography variant="h4" fontWeight={700}>
                        Bartender: Kami no Glass
                    </Typography>
                    <Typography variant="h5" fontWeight={700} className={classes.gray}>
                    Bartender: Glass of God
                    </Typography>
                </Box>
                <Box className={classes.headerTags}>
                    <Box className={classes.pill}>
                        <Typography fontWeight={500} variant="body">
                            TV
                        </Typography>
                    </Box>
                    <Box className={classes.pill}>
                        <Typography fontWeight={500} variant="body">
                            Spring 2024
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid className={classes.content}>
                <img src="https://cdn.myanimelist.net/images/anime/1587/141789l.jpg" alt={id} />
                <Grid flexDirection="column" container className={classes.metadata}>
                    <Grid className={classes.stats}>
                        <Box className={classes.statContainer}>
                            <Box className={clsx(classes.statEntry, classes.white)}>
                                <Typography fontWeight={700} variant="h4">N/A</Typography>
                            </Box>
                            <Box>
                                <Typography fontWeight={700} variant="h5">Score</Typography>
                                <Typography>3457 users</Typography>
                            </Box>
                        </Box>
                        <Box className={classes.statContainer}>
                            <Box className={clsx(classes.statEntry, classes.white)}>
                                <Typography fontWeight={700} variant="h4">N/A</Typography>
                            </Box>
                            <Box>
                                <Typography fontWeight={700} variant="h5">Rank</Typography>
                            </Box>
                        </Box>
                        <Box className={classes.statContainer}>
                            <Box className={clsx(classes.statEntry, classes.white)}>
                                <Typography fontWeight={700} variant="h4">N/A</Typography>
                            </Box>
                            <Box>
                                <Typography fontWeight={700} variant="h5">Popularity</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid>
                        <Typography variant="h5" fontWeight={700} className={clsx(classes.blue, classes.subtitle)} gutterBottom>
                            Synopsis
                        </Typography>
                        <Typography variant="subtitle1">
                            New season of Kimetsu no Yaiba.
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="h5" fontWeight={700} className={clsx(classes.blue, classes.subtitle)} gutterBottom>
                            Genre
                        </Typography>
                        <Box className={classes.headerTags}>
                            <Box className={classes.pill}>
                                <Typography fontWeight={500} variant="body">
                                    Action
                                </Typography>
                            </Box>
                            <Box className={classes.pill}>
                                <Typography fontWeight={500} variant="body">
                                    Fantasy
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    );
};

export default AnimeDetails;
