import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

import AnimePreview from "../AnimePreview";

import { useStyles } from "./styles";
import { groupIntoChunks } from "./utils";

const AnimePreviewCarousel = ({ headerText, data = [] }) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.titleContainer}>
                <Typography variant="h6" className={classes.title}>
                    {headerText}
                </Typography>
            </Box>
            <Box>
                <Carousel autoPlay={false} indicators={false} height={350}>
                    {groupIntoChunks(data, 5).map((group, groupIndex) => (
                        <Grid container key={groupIndex} className={classes.row} flexWrap="nowrap">
                            {group.map((anime, animeIndex) => {
                                const { main_picture, title, id } = anime.node ?? {};
                                return (
                                    <AnimePreview
                                        src={main_picture.medium}
                                        name={title}
                                        id={id}
                                        key={id}
                                    />
                                );
                            })}
                        </Grid>
                    ))}
                </Carousel>
            </Box>
        </Box>
    );
};

export default AnimePreviewCarousel;
