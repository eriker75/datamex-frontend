import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query/react";
import { CookieStorage } from 'redux-persist-cookie-storage';
import thunk from 'redux-thunk';
import Cookies from "js-cookie";
import { persistCombineReducers } from "redux-persist";
import { 
    authSliceReducer, 
    totalCounterSliceReducer,
    totalResumeSliceReducer 
} from '@/redux/slices';
import { 
    totalsCounterApi,
    orderApi,
    authApi 
} from "@/redux/api";

const persistConfig = {
    key: "root",
    storage: new CookieStorage(Cookies)
}

const reducers = {
    auth: authSliceReducer,
    totalCounter: totalCounterSliceReducer,
    totalResume: totalResumeSliceReducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [authApi.reducerPath] : authApi.reducer,
    [totalsCounterApi.reducerPath]: totalsCounterApi.reducer
}

const persistRootReducer = persistCombineReducers(persistConfig, reducers)

export const store = configureStore({
    reducer: persistRootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
        .concat(thunk)
        .concat(authApi.middleware)
        .concat(totalsCounterApi.middleware)
        .concat(orderApi.middleware),
    devTools:true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);