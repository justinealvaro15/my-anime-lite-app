import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userInfo: {},
    dashboard: {},
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
    },
});

export const {
    setUserInfo,
    setDashboardAnimeList,
} = myAnimeListSlice.actions;
export default myAnimeListSlice.reducer;
