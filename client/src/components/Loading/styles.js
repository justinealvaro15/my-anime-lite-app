import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        maxWidth: '1200px',
        width: '100%',
        height: '100%',
        gap: '36px'
    },
}));
