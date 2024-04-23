import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

import useMalApiHelper from "../../hooks/useMalApiHelper";
import { selectAllAnimeList } from "../../slice/myAnimeListSlice.selector";
import { useStyles } from "./styles";
import AnimeMetadataTile from "../../components/AnimeMetadataTile";

const AnimeList = () => {
    const classes = useStyles();
    const { onGetAllAnimeList } = useMalApiHelper();
    const animeList = useSelector(selectAllAnimeList);

    useEffect(() => {
        onGetAllAnimeList();
    }, []);

    return (
        <Box className={classes.root}>
            <Box className={classes.content}>
                {animeList.map((anime) => {
                    const { node } = anime;
                    return <AnimeMetadataTile {...node} key={node.id} />;
                })}
            </Box>
        </Box>
    );
};

export default AnimeList;
