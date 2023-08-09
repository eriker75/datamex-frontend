import { baseQuery } from "../baseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
//import queryString from 'query-string';

export interface Totals {
  totalEmails: number;
  totalPhones: number;
  totalCompanies: number;
  totalWebs: number;
}

export interface Filters{
  cities: string[] | null;
  states: string[] | null;
  sizes: string[] | null;
  trades: string[] | null;
}

export const totalsCounterApi = createApi({
  reducerPath: "totalCounterApi",
  baseQuery,
  tagTypes: ['CounterTotals'],
  endpoints: (builder) => ({
    /* 
    !DELETED: Query parameters only allow a limited information size, POST allow more information
    globalTotals: builder.query<Totals, Filters | void>({
      query: (params) => ({
        url: '/workbooks/totals?'
          .concat(queryString.stringify({ cities: params?.cities }, { arrayFormat: 'bracket' }))
          .concat('&')
          .concat(queryString.stringify({ types: params?.trades }, { arrayFormat: 'bracket' })),
        method: 'GET',
      }),
      providesTags: ['CounterTotals'],
    }), */
    globalTotals: builder.mutation<Totals, Filters | void>({
      query: (body) => ({
        url: '/filters/count',
        method: 'POST',
        body,
      })
    }) 
  })
})

export const { useGlobalTotalsMutation } = totalsCounterApi;