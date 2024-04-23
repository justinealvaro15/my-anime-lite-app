import { makeStyles } from "@mui/styles";
import colors from "../../common/colors";

export const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '575px',
        backgroundColor: colors.white,
        border: `1px solid ${colors.lightBlue}`,
    },
    preview: {
        width: '220px',
        height: '300px',
        cursor: 'pointer',
    },
    details: {
        padding: '12px',
        color: colors.blue,
        fontWeight: '700 !important',
        minHeight: '40px',
        textAlign: 'center',
    },
    release: {
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px',
        backgroundColor: colors.lightGray3,
        '& p': {
            fontSize: '16px',
            color: colors.gray,
        }
    },
    content: {
        display: 'flex',
    },
    genres: {
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px',
        backgroundColor: colors.lightGray,
        flexWrap: 'wrap',
    },
    synposisContainer: {
        padding: '12px',
        maxHeight: '300px',
        overflowY: 'auto',
        boxSizing: 'border-box',
    },
    synopsis: {
        paddingBottom: '12px',
    },
    supporting: {
        padding: '8px',
    },
    supportingBlue: {
        backgroundColor: colors.lightBlue,
    },
    link: {
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));
