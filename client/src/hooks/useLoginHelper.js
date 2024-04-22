import qs from "qs";
import pkceChallenge from "pkce-challenge";
import { useGetAccessTokenMutation } from "../services/myAnimeListApi";

const MAL_CLIENT_ID = process.env.REACT_APP_MAL_CLIENT_ID;
const APP_BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000/';
const MAL_AUTH_BASE_URL = 'https://myanimelist.net/v1/oauth2';

const useLoginHelper = (url) => {
    const [triggerGetAccessToken, response] = useGetAccessTokenMutation();

    const handleLogin = async () => {
        const challenge = await pkceChallenge(128);
        const params = {
            code_challenge: challenge.code_challenge,
            response_type: 'code',
            client_id: MAL_CLIENT_ID,
            state: challenge.code_challenge,
        }
        const url = `${MAL_AUTH_BASE_URL}/authorize?${qs.stringify(params)}`;
        window.location.replace(url);
    };

    const handleGetAccessToken = async (code, codeVerifier) => {
        try {
            const response = await triggerGetAccessToken({ code, codeVerifier });
            Object.entries(response.data).forEach(([key, value]) => {
                localStorage.setItem(key, value);
            });
            window.location.replace(APP_BASE_URL);
        } catch (error) {
            console.error('Error encountered:', error)
        }
    };

    return { onLogin: handleLogin, onGetAccessToken: handleGetAccessToken };
};

export default useLoginHelper;