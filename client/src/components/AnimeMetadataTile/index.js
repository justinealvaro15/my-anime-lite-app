import React from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import moment from 'moment';

import { useStyles } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import Pill from "../Pill";
import clsx from "clsx";

const AnimeMetadataTile = ({
    id,
    title,
    mainPicture,
    startDate,
    numEpisodes,
    averageEpisodeDuration,
    genres,
    synopsis,
    studios = [],
    source,
}) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const releaseDate = moment().format('LL')

    const handleTileClick = () => {
        navigate(`/anime/${id}`);
    };

    return (
        <Box className={classes.root} key={id}>
            <Link to={`/anime/${id}`} className={classes.link}>
                <Typography className={classes.details} fontWeight={700} variant="h6">
                    {title}
                </Typography>
            </Link>
            <Box className={classes.release}>
                <Typography>{releaseDate}</Typography>
                <Typography>|</Typography>
                {numEpisodes && <Typography>{numEpisodes} eps,</Typography>}
                {averageEpisodeDuration && <Typography>{averageEpisodeDuration/60} min</Typography>}
            </Box>
            <Box className={classes.genres}>
                {genres.map((genre) => (
                    <Pill label={genre.name} size="small" />
                ))}
            </Box>
            <Box className={classes.content}>
                <Box
                    className={classes.preview}
                    component="img"
                    src={mainPicture?.large ?? mainPicture?.medium}
                    alt={title}
                    onClick={handleTileClick}
                />
                <Box className={classes.synposisContainer}>
                    <Typography className={classes.synopsis}>
                        {synopsis}
                    </Typography>
                    <Typography className={clsx(classes.supporting, classes.supportingBlue)}>
                        <b>Studio:</b> {studios[0]?.name}
                    </Typography>
                    <Typography textTransform="capitalize" className={classes.supporting}>
                        <b>Source:</b> {source}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default AnimeMetadataTile;
