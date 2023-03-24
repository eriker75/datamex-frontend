import { baseQuery } from "../baseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import queryString from 'query-string';

export interface Totals {
  emails: number;
  phones: number;
  companies: number;
  webs: number;
}

export interface Filters{
  cities: string[] | null;
  wbtypes: string[] | null;
}

export const totalsCounterApi = createApi({
  reducerPath: "totalCounterApi",
  baseQuery,
  tagTypes: ['CounterTotals'],
  endpoints: (builder) => ({
    globalTotals: builder.query<Totals, Filters | void>({
      query: (params) => ({
        url: '/workbooks/totals?'
          .concat(queryString.stringify({ cities: params?.cities }, { arrayFormat: 'bracket' }))
          .concat('&')
          .concat(queryString.stringify({ types: params?.wbtypes }, { arrayFormat: 'bracket' })),
        method: 'GET',
      }),
      providesTags: ['CounterTotals'],
    }),
  })
})

export const { useGlobalTotalsQuery } = totalsCounterApi;