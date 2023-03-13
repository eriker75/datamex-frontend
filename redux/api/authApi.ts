import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from "@/redux/baseQuery"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery,
    endpoints: (builder) => ({
        singIn: builder.mutation({
            query: (body: { email: string; password: string }) => {
                return {
                    url: "/user/signin",
                    method: "POST",
                    body,
                };
            },
        })
    })
})

export const { useSingInMutation } = authApi;