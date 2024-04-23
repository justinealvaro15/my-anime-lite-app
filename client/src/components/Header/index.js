import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import { Avatar, Box, Typography } from "@mui/material";
import useMalApiHelper from "../../hooks/useMalApiHelper";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../../slice/myAnimeListSlice.selector";

const Header = () => {
    const classes = useStyles();
    const userInfo = useSelector(selectUserInfo);
    const { name, picture } = userInfo;
    const { onGetUserInfo } = useMalApiHelper();

    useEffect(() => {
        onGetUserInfo();
    }, []);

    return (
        <Box className={classes.root}>
            <Box className={classes.content}>
                <Link to="/" className={classes.link}>
                    <Typography className={classes.title} variant="h4">
                        MyAnimeLite
                    </Typography>
                </Link>
                <Box className={classes.user}>
                    <Typography variant="body" fontWeight={500}>{name}</Typography>
                    <Avatar alt={name} src={picture} />
                </Box>
            </Box>
        </Box>
    );
};

export default Header;