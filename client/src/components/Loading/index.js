import { Box, CircularProgress } from "@mui/material";
import { useStyles } from "./styles";

const Loading = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <CircularProgress size="10rem" />
        </Box>
    );
};

export default Loading;