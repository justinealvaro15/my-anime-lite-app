import { makeStyles } from "@mui/styles";
import colors from "../../common/colors";

export const useStyles = makeStyles(() => ({
    root: {
        width: '220px',
        backgroundColor: colors.lightGray,
        border: `1px solid ${colors.lightBlue}`,
        cursor: 'pointer',
        "&:hover": {
            border: `1px solid ${colors.blue}`,
        },
    },
    preview: {
        width: '220px',
        height: '300px',
    },
    details: {
        padding: '8px',
        color: colors.blue,
        fontWeight: '700 !important',
        minHeight: '40px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    },
}));
