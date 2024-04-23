import { Box } from "@mui/material";
import { useStyles } from "./styles";
import { PieChart } from "@mui/x-charts/PieChart";

import { useSelector } from "react-redux";
import { selectUserInfo } from "../../slice/myAnimeListSlice.selector";

const ProfileChart = () => {
    const classes = useStyles();
    const userInfo = useSelector(selectUserInfo);
    const { animeStatistics = {} } = userInfo;
    const {
        numItemsWatching,
        numItemsCompleted,
        numItemsDropped,
        numItemsPlanToWatch
    } = animeStatistics;
    const data = [
        { id: 0, label: 'Watching', value: numItemsWatching, color: 'blue' },
        { id: 1, label: 'Completed', value: numItemsCompleted, color: 'green' },
        { id: 2, label: 'Dropped', value: numItemsDropped, color: 'red' },
        { id: 3, label: 'Plan to Watch', value: numItemsPlanToWatch, color: 'violet' },
    ];

    return (
        <Box className={classes.root}>
            <PieChart
                series={[{data}]}
                width={600}
                height={300}
            />
        </Box>
    );
};

export default ProfileChart;