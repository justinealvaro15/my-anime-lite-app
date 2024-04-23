import { makeStyles } from "@mui/styles";
import colors from "../../common/colors";

export const useStyles = makeStyles(() => ({
    header: {
        display: 'flex',
        width: '100%',
        borderBottom: `1px solid ${colors.lightGray2}`,
        paddingBottom: '8px',
    },
    blue: {
        color: colors.blue,
    },
}));
