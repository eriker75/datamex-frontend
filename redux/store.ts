import { configureStore } from "@reduxjs/toolkit";
import { authApi } from '@/redux/api/authApi';
import authSlice from '@/redux/slices/authSlice';
import { totalsCounterApi } from "./api/totalCounterApi";
import totalCounterSlice from './slices/totalCounterSlice';
import { setupListeners } from "@reduxjs/toolkit/dist/query/react";
import totalResumeSlice from './slices/totalResumeSlice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        totalCounter: totalCounterSlice,
        totalResume: totalResumeSlice,
        [authApi.reducerPath] : authApi.reducer,
        [totalsCounterApi.reducerPath]: totalsCounterApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
        .concat(authApi.middleware)
        .concat(totalsCounterApi.middleware),
    devTools: Boolean(process.env.NEXT_REDUX_DEVTOOLS_ACTIVATED) || true,
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);

export { store };