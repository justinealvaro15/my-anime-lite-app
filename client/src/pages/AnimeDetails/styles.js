import { makeStyles } from "@mui/styles";
import colors from "../../common/colors";

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        gap: '24px',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        borderBottom: `1px solid ${colors.lightGray2}`,
        paddingBottom: '12px',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: '24px',
    },
    metadata: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: '24px',
    },
    blue: {
        color: colors.blue,
    },
    gray: {
        color: colors.gray,
    },
    white: {
        color: colors.white,
    },
    tags: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
    },
    stats: {
        display: 'flex',
        padding: '16px',
        backgroundColor: colors.lightGray,
        border: `1px solid ${colors.lightBlue}`,
        borderRadius: '4px',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
}));