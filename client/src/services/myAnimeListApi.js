import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const MAL_CLIENT_ID = process.env.REACT_APP_MAL_CLIENT_ID;

export const myAnimeListApi = createApi({
    reducerPath: 'myAnimeListApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/anime',
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
    }),
})

export const { useGetAccessTokenMutation } = myAnimeListApi;