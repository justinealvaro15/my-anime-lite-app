import { Box, CircularProgress } from "@mui/material";

import Footer from "../../components/Footer"

import useLoginHelper from "../../hooks/useLoginHelper";
import { useStyles } from "./styles";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Auth = () => {
    const classes = useStyles();
    const { onGetAccessToken } = useLoginHelper();
    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');
    const state = searchParams.get('state');

    useEffect(() => {
        onGetAccessToken(code, state);
    }, []);

    return (
        <Box className={classes.root}>
            <Box className={classes.content}>
                <CircularProgress size="10rem" />
            </Box>
            <Footer />
        </Box>
    );
};

export default Auth;