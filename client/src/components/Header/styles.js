import { makeStyles } from "@mui/styles";
import colors from "../../common/colors";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        background: colors.white,
        borderBottom: `1px solid ${colors.blue}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        width: '100%',
        padding: '12px 4px',
    },
    title: {
        color: colors.blue,
        fontWeight: '700 !important',
        fontFamily: 'Russo One, sans-serif'
    },
    user: {
        display: 'flex',
    },
}));