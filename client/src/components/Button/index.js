import React from "react";
import { Button as MUIButton } from "@mui/material";

import { useStyles } from "./styles";

const Button = (props) => {
    const classes = useStyles();

    return (
        <MUIButton {...props} classes={classes} />
    );
};

export default Button;