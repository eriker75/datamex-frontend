import { configureStore } from "@reduxjs/toolkit";
import { authApi } from '@/redux/api/authApi';
import authSlice from './services/authSlice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        [authApi.reducerPath] : authApi.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(authApi.middleware),
    devTools: true
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };