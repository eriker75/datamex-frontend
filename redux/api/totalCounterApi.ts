import { baseQuery } from "../baseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import queryString from 'query-string';

export interface Welcome {
  emails: number;
  phones: number;
  companies: number;
  webs: number;
}

export const totalsCounterApi = createApi({
  reducerPath: "totalCounterApi",
  baseQuery,
  tagTypes: ['CounterTotals'],
  endpoints: (builder) => ({
    globalTotals: builder.query<Welcome, string[] | void>({
      query: (cities) => ({
        url: '/workbooks/totals?' + queryString.stringify({cities}, {arrayFormat: 'bracket'}),
        method: 'GET',
      }),
      providesTags: ['CounterTotals'],
    }),
  })
})

export const { useGlobalTotalsQuery } = totalsCounterApi;