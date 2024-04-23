import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import { useStyles } from "./styles";

const Footer = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.content}>
                <Grid container flexDirection="column">
                    <Typography color="inherit" variant="h6">
                        Powered by <a href="https://myanimelist.net/" className={classes.link}><b>MyAnimeList</b></a>
                    </Typography>
                    <Typography color="inherit" variant="caption">
                        MyAnimeLite © 2024
                    </Typography>
                </Grid>
                <Grid container flexDirection="column" className={classes.socials}>
                    <Typography color="inherit" variant="caption">
                        Follow the official MAL accounts
                    </Typography>
                    <Grid className={classes.logos}>
                        <a
                            href="https://www.facebook.com/OfficialMyAnimeList"
                            className={classes.link}
                        >
                            <FacebookIcon />
                        </a>
                        <a
                            href="https://twitter.com/myanimelist"
                            className={classes.link}
                        >
                            <TwitterIcon />
                        </a>
                        <a
                            href="https://www.instagram.com/myanimelistofficial"
                            className={classes.link}
                        >
                            <InstagramIcon />
                        </a>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Footer;
