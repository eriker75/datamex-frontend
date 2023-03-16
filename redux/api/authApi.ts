import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/redux/baseQuery';

export interface LoginBodyInterface{
    email: string;
    password: string;
}

export interface SignInBodyInterface{
    email: string;
    password: string;
    password_confirm: string;
}

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery,
    endpoints: (builder) => ({
        singIn: builder.mutation({
            query: (body: SignInBodyInterface) => {
                return {
                    url: "/auth/signin",
                    method: "POST",
                    body,
                };
            },
        }),
        logIn: builder.mutation({
            query: (body: LoginBodyInterface) => {
                return {
                    url: "/user/login",
                    method: "POST",
                    body,
                };
            },
        }),
        logOut: builder.mutation({
            query: (body : void) => {
                return {
                    url: "/user/login",
                    method: "POST",
                    body,
                };
            },
        }),
    })
})

export const { 
    useSingInMutation,
    useLogInMutation,
    useLogOutMutation 
} = authApi;