import { Box, Typography } from "@mui/material";
import { useStyles } from "./styles";

const Pill = ({ label }) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography fontWeight={500} variant="body" textTransform="capitalize">
                {label}
            </Typography>
        </Box>
    );
};

export default Pill;