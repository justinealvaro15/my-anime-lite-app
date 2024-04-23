import { useDispatch } from "react-redux";
import { useLazyGetCurrentUserInfoQuery, useLazyGetDashboardAnimeListQuery } from "../services/myAnimeListApi";
import { setDashboardAnimeList, setUserInfo } from "../slice/myAnimeListSlice";

const useMalApiHelper = (url) => {
    const dispatch = useDispatch();
    const [triggerGetUserInfo] = useLazyGetCurrentUserInfoQuery();
    const [triggerGetDashboardInfo] = useLazyGetDashboardAnimeListQuery();

    const handleGetUserInfo = async (code, codeVerifier) => {
        try {
            const response = await triggerGetUserInfo();
            dispatch(setUserInfo(response.data));
        } catch (error) {
            console.error('Error encountered:', error)
        }
    };

    const handleGetDashboardAnimeList = async (code, codeVerifier) => {
        try {
            const response = await triggerGetDashboardInfo();
            dispatch(setDashboardAnimeList(response.data));
        } catch (error) {
            console.error('Error encountered:', error)
        }
    };

    return {
        onGetUserInfo: handleGetUserInfo,
        onGetDashboardAnimeList: handleGetDashboardAnimeList,
    };
};

export default useMalApiHelper;