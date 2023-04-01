import { BaseQueryFn, FetchArgs, createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from '@/redux/baseQuery';

export interface LoginBodyInterface{
    email: string;
    password: string;
}

export interface SignInBodyInterface{
    email: string;
    password: string;
    password_confirmation: string;
}

export interface LoginResponse{
    token: string;
}

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        singIn: builder.mutation({
            query: (body: SignInBodyInterface) => {
                return {
                    url: "/auth/register",
                    method: "POST",
                    body,
                };
            },
        }),
        logIn: builder.mutation<LoginResponse , LoginBodyInterface>({
            query: (body: LoginBodyInterface) => {
                return {
                    url: "/auth/login",
                    method: "POST",
                    body,
                };
            },
        }),
        logOut: builder.mutation({
            query: (body : void) => {
                return {
                    url: "/auth/logout",
                    method: "POST",
                    body,
                };
            },
        }),
    }),
})

export const { 
    useSingInMutation,
    useLogInMutation,
    useLogOutMutation 
} = authApi;