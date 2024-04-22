import { makeStyles } from "@mui/styles";
import colors from "../../common/colors";

export const useStyles = makeStyles(() => ({
    root: {
        '&.MuiButton-contained': {
            background: colors.blue,
            "&:hover": {
                background: colors.darkBlue,
            },
            "&:active, &:focus": {
                background: colors.blue,
            },
        }
    },
}));