import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { isEmpty } from "lodash";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import useMalApiHelper from "../../hooks/useMalApiHelper";
import { selectAnimeInfo } from "../../slice/myAnimeListSlice.selector";

import Loading from "../../components/Loading";
import Pill from "../../components/Pill";
import { useStyles } from "./styles";
import { MEDIA_TYPE_LABEL_MAPPING } from "../../common/labels";
import Metadata from "../../components/Metadata";
import DetailSection from "../../components/DetailSection";

const AnimeDetails = () => {
    const classes = useStyles();
    let { id } = useParams();
    const { onGetAnimeInfo, isAnimeInfoLoading } = useMalApiHelper();
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

    if (isAnimeInfoLoading) {
        return (
            <Box className={classes.root}>
                <Loading />
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
                <Box className={classes.tags}>
                    <Pill label={MEDIA_TYPE_LABEL_MAPPING[mediaType] ?? mediaType} />
                    <Pill label={!isEmpty(startSeason) ? `${startSeason.season} ${startSeason.year}` : 'No Date Announced'} />
                </Box>
            </Grid>
            <Grid className={classes.content}>
                <img src={mainPicture?.large ?? mainPicture?.medium} alt={title} />
                <Grid flexDirection="column" container className={classes.metadata}>
                    <Grid className={classes.stats}>
                        <Metadata
                            data={mean ?? 'N/A'}
                            label="Score"
                            subLabel={`${numScoringUsers} users`}
                        />
                        <Metadata
                            data={rank ? `#${rank}` : 'N/A'}
                            label="Rank"
                        />
                        <Metadata
                            data={popularity ? `#${popularity}` : 'N/A'}
                            label="Popularity"
                            subLabel={`${numListUsers} users`}
                        />
                    </Grid>
                    <DetailSection label="Synopsis">
                        <Typography variant="subtitle1">
                            {synopsis}
                        </Typography>
                    </DetailSection>
                    <DetailSection label="Genre">
                        <Box className={classes.tags}>
                            {genres.map((genre) => (
                                <Pill label={genre.name} />
                            ))}
                        </Box>
                    </DetailSection>
                </Grid>
            </Grid>
        </Grid>

    );
};

export default AnimeDetails;
