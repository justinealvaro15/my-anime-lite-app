import { makeStyles } from "@mui/styles";
import colors from "../../common/colors";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        background: colors.blue,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 'auto',
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        width: '100%',
        padding: '12px 8px',
        boxSizing: 'border-box',
    },
}));
