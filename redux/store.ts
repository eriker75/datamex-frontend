'use client';
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;

export { store };