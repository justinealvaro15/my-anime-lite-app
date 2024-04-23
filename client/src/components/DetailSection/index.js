import { Grid, Typography } from "@mui/material";
import { useStyles } from "./styles";
import clsx from "clsx";

const DetailSection = ({ label, children }) => {
    const classes = useStyles();

    return (
        <Grid>
            <Typography
                variant="h5"
                fontWeight={700}
                className={clsx(classes.blue, classes.header)}
                gutterBottom
            >
                {label}
            </Typography>
            {children}
        </Grid>
    );
};

export default DetailSection;