import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

import AnimePreview from "../AnimePreview";

import { useStyles } from "./styles";
import { DUMMY_DATA } from "./dummy";
import { groupIntoChunks } from "./utils";

const AnimePreviewCarousel = ({ headerText }) => {
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
                    {groupIntoChunks(DUMMY_DATA, 5).map((group, groupIndex) => (
                        <Grid container key={groupIndex} className={classes.row} flexWrap="nowrap">
                            {group.map((anime, animeIndex) => {
                                const { src, name, id } = anime;
                                return (
                                    <AnimePreview
                                        src={src}
                                        name={name}
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
