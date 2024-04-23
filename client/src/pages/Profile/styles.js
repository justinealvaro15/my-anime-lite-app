import { makeStyles } from "@mui/styles";
import colors from "../../common/colors";

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: '24px',
    },
    content: {
        display: 'flex',
        width: '100%',
        gap: '24px',
    },
    left: {
        display: 'flex',
        flexDirection: 'column',
        width: '250px',
    },
    right: {
        width: '100%',
    },
    profilePicture: {
        width: '250px',
        border: `1px solid ${colors.lightGray2}`,
    },
    tempProfilePicture: {
        width: '250px',
        height: '250px',
        backgroundColor: colors.lightBlue,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: colors.gray,
        border: `1px solid ${colors.lightGray2}`,
        boxSizing: 'border-box',
    },
    personalInfo: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    personalInfoEntry: {
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        padding: '12px 0',
        borderBottom: `1px solid ${colors.lightBlue}`,
    },
}));