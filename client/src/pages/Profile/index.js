import React from "react";
import { Box } from "@mui/material";

import { useStyles } from "./styles";

const Profile = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            Profile
        </Box>
    );
};

export default Profile;
