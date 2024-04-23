import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
        overflowY: 'scroll'
    },
    content: {
        display: 'flex',
        alignSelf: 'center',
        padding: '10px',
        maxWidth: '1200px',
        width: '100%',
        height: '100%',
    },
}));