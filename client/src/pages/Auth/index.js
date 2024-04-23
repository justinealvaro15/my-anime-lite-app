import { Box } from "@mui/material";

import Footer from "../../components/Footer"

import useLoginHelper from "../../hooks/useLoginHelper";
import { useStyles } from "./styles";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Loading from "../../components/Loading";

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
            <Loading />
            <Footer />
        </Box>
    );
};

export default Auth;