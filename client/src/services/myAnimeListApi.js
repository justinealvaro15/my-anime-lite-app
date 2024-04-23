import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const MAL_CLIENT_ID = process.env.REACT_APP_MAL_CLIENT_ID;

const getToken = async () => {
    const token = await localStorage.getItem('access_token');
    return token;
}

export const myAnimeListApi = createApi({
    reducerPath: 'myAnimeListApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/anime',
        prepareHeaders: async (headers, query) => {
            const token = await getToken();
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getAccessToken: builder.mutation({
            query: ({ code, codeVerifier }) => {
                const params = new URLSearchParams({
                    client_id: MAL_CLIENT_ID,
                    code,
                    code_verifier: codeVerifier,
                    grant_type: 'authorization_code',
                });

                return {
                    url: '/token',
                    method: 'POST',
                    body: params,
                };
            },
        }),
        getCurrentUserInfo: builder.query({
            query: () => {
                return {
                    url: '/userInfo',
                };
            },
        }),
        getDashboardAnimeList: builder.query({
            query: () => {
                return {
                    url: '/dashboard',
                };
            },
        }),
        getAnimeInfo: builder.query({
            query: (id) => {
                console.log('id', id)
                return {
                    url: `/info/${id}`,
                };
            },
        }),
    }),
})

export const {
    useGetAccessTokenMutation,
    useLazyGetCurrentUserInfoQuery,
    useLazyGetDashboardAnimeListQuery,
    useLazyGetAnimeInfoQuery,
} = myAnimeListApi;