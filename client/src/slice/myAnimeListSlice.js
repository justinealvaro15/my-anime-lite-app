import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userInfo: {},
};

const myAnimeListSlice = createSlice({
    name: 'myAnimeList',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
        },
    },
});

export const { setUserInfo } = myAnimeListSlice.actions;
export default myAnimeListSlice.reducer;
