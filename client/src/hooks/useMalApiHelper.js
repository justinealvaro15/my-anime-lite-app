import { useDispatch } from "react-redux";
import { useLazyGetAnimeInfoQuery, useLazyGetCurrentUserInfoQuery, useLazyGetDashboardAnimeListQuery } from "../services/myAnimeListApi";
import { setAnimeInfo, setDashboardAnimeList, setUserInfo } from "../slice/myAnimeListSlice";

const useMalApiHelper = (url) => {
    const dispatch = useDispatch();
    const [triggerGetUserInfo] = useLazyGetCurrentUserInfoQuery();
    const [triggerGetDashboardInfo] = useLazyGetDashboardAnimeListQuery();
    const [triggerGetAnimeInfo] = useLazyGetAnimeInfoQuery();

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

    const handleGetAnimeInfo = async (id) => {
        try {
            const response = await triggerGetAnimeInfo(id);
            dispatch(setAnimeInfo(response.data));
        } catch (error) {
            console.error('Error encountered:', error)
        }
    };

    return {
        onGetUserInfo: handleGetUserInfo,
        onGetAnimeInfo: handleGetAnimeInfo,
        onGetDashboardAnimeList: handleGetDashboardAnimeList,
    };
};

export default useMalApiHelper;