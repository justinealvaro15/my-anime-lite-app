import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    content: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '24px',
    },
}));