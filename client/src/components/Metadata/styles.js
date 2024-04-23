import { makeStyles } from "@mui/styles";
import colors from "../../common/colors";

export const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
    },
    data: {
        padding: '16px',
        borderRadius: '8px',
        backgroundColor: colors.blue,
    },
    white: {
        color: colors.white,
    },
}));
