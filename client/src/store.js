import { configureStore } from '@reduxjs/toolkit'
import { myAnimeListApi } from './services/myAnimeListApi'
import myAnimeListReducer from './slice/myAnimeListSlice'

export const store = configureStore({
    reducer: {
        myAnimeList: myAnimeListReducer,
        [myAnimeListApi.reducerPath]: myAnimeListApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(myAnimeListApi.middleware),
})