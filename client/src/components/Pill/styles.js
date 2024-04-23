import { makeStyles } from "@mui/styles";
import colors from "../../common/colors";

export const useStyles = makeStyles(() => ({
    root: {
        padding: '8px',
        border: `2px solid ${colors.blue}`,
        borderRadius: '8px',
        backgroundColor: colors.lightBlue,
    },
}));
