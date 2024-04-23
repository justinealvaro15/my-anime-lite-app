import { useDispatch } from "react-redux";
import { useLazyGetCurrentUserInfoQuery } from "../services/myAnimeListApi";
import { setUserInfo } from "../slice/myAnimeListSlice";

const useMalApiHelper = (url) => {
    const dispatch = useDispatch();
    const [triggerGetUserInfo] = useLazyGetCurrentUserInfoQuery();
    const token = localStorage.getItem('access_token');

    const handleGetUserInfo = async (code, codeVerifier) => {
        try {
            const response = await triggerGetUserInfo({ token });
            dispatch(setUserInfo(response.data));
        } catch (error) {
            console.error('Error encountered:', error)
        }
    };

    return { onGetUserInfo: handleGetUserInfo };
};

export default useMalApiHelper;