import { configureStore } from "@reduxjs/toolkit";
import { authApi } from '@/redux/api/authApi';
import authSlice from '@/redux/slices/authSlice';
import { totalsCounterApi } from "./api/totalCounterApi";
import totalCounterSlice from './slices/totalCounterSlice';
import { setupListeners } from "@reduxjs/toolkit/dist/query/react";
import totalResumeSlice from './slices/totalResumeSlice';
import { orderApi } from './api/orderApi';

const store = configureStore({
    reducer: {
        auth: authSlice,
        totalCounter: totalCounterSlice,
        totalResume: totalResumeSlice,
        [orderApi.reducerPath]: orderApi.reducer,
        [authApi.reducerPath] : authApi.reducer,
        [totalsCounterApi.reducerPath]: totalsCounterApi.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
        .concat(authApi.middleware)
        .concat(totalsCounterApi.middleware)
        .concat(orderApi.middleware),
    devTools:true,
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);

export { store };