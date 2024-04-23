import { makeStyles } from "@mui/styles";
import colors from "../../common/colors";

export const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        maxWidth: '1200px',
    },
    row: {
        flexWrap: 'nowrap',
        gap: '21px',
    },
    titleContainer: {
        display: 'flex',
        marginBottom: '12px',
        borderBottom: `1px solid ${colors.lightBlue}`
    },
    title: {
        fontWeight: '700 !important',
        fontSize: '24px',
    },
}));
