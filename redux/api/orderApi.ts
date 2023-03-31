import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth, baseApi } from '@/redux/baseQuery';
import { Order } from '@/models';

export interface makeOrderRequest{
    batchSize: number;
    filters: string[];
    wbtypes: string[];
}

export const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({
        makeOrder: builder.mutation<any, makeOrderRequest>({
            query: (body) => {
                return {
                    url: "order",
                    method: "POST",
                    body,
                };
            },
        }),
        getOrders: builder.query<Order[], void>({
            query: () => {
                return {
                    url: "order",
                    method: "GET"
                };
            },
        }),
    })
})

export const { useGetOrdersQuery, useMakeOrderMutation } = orderApi;

/* export const orderApi2 = baseApi.injectEndpoints({
    endpoints: builder => ({
        makeOrder: builder.mutation<makeOrderResponse, makeOrderRequest>({
            query: (body) => {
                return {
                    url: "order",
                    method: "POST",
                    body,
                };
            },
        })
    })
}) */