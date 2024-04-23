import { Box, Typography } from "@mui/material";
import { useStyles } from "./styles";

const Metadata = ({ label, subLabel, data }) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.data}>
                <Typography fontWeight={700} variant="h4" className={classes.white}>
                    {data}
                </Typography>
            </Box>
            <Box>
                <Typography fontWeight={700} variant="h5">{label}</Typography>
                {subLabel && <Typography>{subLabel}</Typography>}
            </Box>
        </Box>
    );
};

export default Metadata;