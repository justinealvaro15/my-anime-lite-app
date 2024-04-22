import { Box, Typography } from "@mui/material";

import Footer from "../../components/Footer"
import Button from "../../components/Button";
import { useStyles } from "./styles";

const Login = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.content}>
                <Box className={classes.section}>
                    <Typography variant="h2" fontWeight={700} className={classes.blue}>
                        MyAnimeLite
                    </Typography>
                    <Typography variant="h4" fontWeight={700}>
                        Discover your next favorite anime 💥
                    </Typography>
                </Box>
                <Box className={classes.section}>
                    <Typography variant="h6">
                        This app uses the official <b className={classes.blue}>MyAnimeList</b> (MAL) public API.
                    </Typography>
                    <Typography variant="h6">
                        You'd need a MAL account to access the features.
                    </Typography>
                </Box>
                <Button size="large" variant="contained" disableElevation>
                    LOGIN VIA MAL
                </Button>
            </Box>
            <Footer />
        </Box>
    );
};

export default Login;
