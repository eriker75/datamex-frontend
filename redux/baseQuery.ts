import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { logIn, logOut } from './slices/authSlice'
import { RootState } from './store';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/v1',
    //credentials: 'include', //Include cookies in all requests
    prepareHeaders: (headers, { getState }) => {
        const state = getState() as RootState;
        const token = state.auth.token
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
})

export { baseQuery };
