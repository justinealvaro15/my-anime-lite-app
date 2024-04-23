import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
    root: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
        overflowY: 'auto',
        alignItems: 'center',
    },
    content: {
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
