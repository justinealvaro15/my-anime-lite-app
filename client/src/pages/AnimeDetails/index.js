import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { isEmpty } from "lodash";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import useMalApiHelper from "../../hooks/useMalApiHelper";
import { selectAnimeInfo } from "../../slice/myAnimeListSlice.selector";

import { useStyles } from "./styles";
import { MEDIA_TYPE_LABEL_MAPPING } from "../../common/labels";

const AnimeDetails = () => {
    const classes = useStyles();
    let { id } = useParams();
    const { onGetAnimeInfo } = useMalApiHelper();
    const animeInfo = useSelector(selectAnimeInfo);
    const {
        title,
        alternativeTitles,
        mediaType,
        startSeason,
        mean,
        numListUsers,
        numScoringUsers,
        rank,
        popularity,
        mainPicture,
        synopsis,
        genres = [],
    } = animeInfo;

    useEffect(() => {
        onGetAnimeInfo(id);
    }, []);

    if (!id || isEmpty(animeInfo)) {
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
                        {title}
                    </Typography>
                    <Typography variant="h5" fontWeight={700} className={classes.gray}>
                        {alternativeTitles?.en ?? alternativeTitles?.ja}
                    </Typography>
                </Box>
                <Box className={classes.headerTags}>
                    <Box className={classes.pill}>
                        <Typography fontWeight={500} variant="body">
                            {MEDIA_TYPE_LABEL_MAPPING[mediaType]}
                        </Typography>
                    </Box>
                    <Box className={classes.pill}>
                        <Typography fontWeight={500} variant="body" textTransform="capitalize">
                            {!isEmpty(startSeason) ? `${startSeason.season} ${startSeason.year}` : 'No Date Announced'}
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid className={classes.content}>
                <img src={mainPicture?.large ?? mainPicture?.medium} alt={title} />
                <Grid flexDirection="column" container className={classes.metadata}>
                    <Grid className={classes.stats}>
                        <Box className={classes.statContainer}>
                            <Box className={clsx(classes.statEntry, classes.white)}>
                                <Typography fontWeight={700} variant="h4">{mean ?? 'N/A'}</Typography>
                            </Box>
                            <Box>
                                <Typography fontWeight={700} variant="h5">Score</Typography>
                                <Typography>{numScoringUsers} users</Typography>
                            </Box>
                        </Box>
                        <Box className={classes.statContainer}>
                            <Box className={clsx(classes.statEntry, classes.white)}>
                                <Typography fontWeight={700} variant="h4">{rank ?? 'N/A'}</Typography>
                            </Box>
                            <Box>
                                <Typography fontWeight={700} variant="h5">Rank</Typography>
                            </Box>
                        </Box>
                        <Box className={classes.statContainer}>
                            <Box className={clsx(classes.statEntry, classes.white)}>
                                <Typography fontWeight={700} variant="h4">{popularity ?? 'N/A'}</Typography>
                            </Box>
                            <Box>
                                <Typography fontWeight={700} variant="h5">Popularity</Typography>
                                <Typography>{numListUsers} users</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid>
                        <Typography variant="h5" fontWeight={700} className={clsx(classes.blue, classes.subtitle)} gutterBottom>
                            Synopsis
                        </Typography>
                        <Typography variant="subtitle1">
                            {synopsis}
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="h5" fontWeight={700} className={clsx(classes.blue, classes.subtitle)} gutterBottom>
                            Genre
                        </Typography>
                        <Box className={classes.headerTags}>
                            {genres.map((genre) => (
                                <Box className={classes.pill} key={genre.id}>
                                    <Typography fontWeight={500} variant="body">
                                        {genre.name}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    );
};

export default AnimeDetails;
