import { configureStore } from "@reduxjs/toolkit";
import { authApi } from '@/redux/api/authApi';
import authSlice from '@/redux/slices/authSlice';
import { totalsCounterApi } from "./api/totalCounterApi";

const store = configureStore({
    reducer: {
        auth: authSlice,
        [authApi.reducerPath] : authApi.reducer,
        [totalsCounterApi.reducerPath]: totalsCounterApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
        .concat(authApi.middleware)
        .concat(totalsCounterApi.middleware),
    devTools: true
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };