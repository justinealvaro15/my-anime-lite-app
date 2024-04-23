import { useDispatch } from "react-redux";
import { useLazyGetAllAnimeListQuery, useLazyGetAnimeInfoQuery, useLazyGetCurrentUserInfoQuery, useLazyGetDashboardAnimeListQuery } from "../services/myAnimeListApi";
import { setAllAnimeList, setAnimeInfo, setDashboardAnimeList, setUserInfo } from "../slice/myAnimeListSlice";

const useMalApiHelper = (url) => {
    const dispatch = useDispatch();
    const [triggerGetUserInfo] = useLazyGetCurrentUserInfoQuery();
    const [triggerGetAllInfo] = useLazyGetAllAnimeListQuery();
    const [triggerGetDashboardInfo] = useLazyGetDashboardAnimeListQuery();
    const [triggerGetAnimeInfo, { isLoading: isAnimeInfoLoading }] = useLazyGetAnimeInfoQuery();

    const handleGetUserInfo = async (code, codeVerifier) => {
        try {
            const response = await triggerGetUserInfo();
            dispatch(setUserInfo(response.data));
        } catch (error) {
            console.error('Error encountered:', error)
        }
    };

    const handleGetAllAnimeList = async (code, codeVerifier) => {
        try {
            const response = await triggerGetAllInfo();
            dispatch(setAllAnimeList(response.data));
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
        onGetAllAnimeList: handleGetAllAnimeList,
        onGetDashboardAnimeList: handleGetDashboardAnimeList,
        isAnimeInfoLoading,
    };
};

export default useMalApiHelper;