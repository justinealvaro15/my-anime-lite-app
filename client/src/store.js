import { configureStore } from '@reduxjs/toolkit'
import { myAnimeListApi } from './services/myAnimeListApi'

export const store = configureStore({
    reducer: {
        [myAnimeListApi.reducerPath]: myAnimeListApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(myAnimeListApi.middleware),
})