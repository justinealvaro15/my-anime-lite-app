import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userInfo: {},
    dashboard: {},
    animeInfo: {},
    animeList: [],
};

const myAnimeListSlice = createSlice({
    name: 'myAnimeList',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
        },
        setDashboardAnimeList: (state, action) => {
            state.dashboard = action.payload;
        },
        setAnimeInfo: (state, action) => {
            state.animeInfo = action.payload;
        },
        setAllAnimeList: (state, action) => {
            state.animeList = action.payload;
        },
    },
});

export const {
    setUserInfo,
    setDashboardAnimeList,
    setAnimeInfo,
    setAllAnimeList,
} = myAnimeListSlice.actions;
export default myAnimeListSlice.reducer;
