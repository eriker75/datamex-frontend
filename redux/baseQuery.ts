import { BaseQueryApi, FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { authorize, logout } from './slices/authSlice'
import { RootState } from './store';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3000/api/v1',
  credentials: 'include', //Include cookies in all requests
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const token = state.auth.token
    if (token) {
      headers.set("authorization", `Bearer ${token}`)
    }
    return headers
  }
})

const baseQueryWithReauth = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 403) {
    const refreshResult = await baseQuery('/refresh', api, extraOptions)
    if (refreshResult?.data) {
      const state = api.getState() as RootState;
      const user = state.auth.user as NonNullable<typeof state.auth.user>;
      const token = state.auth.user as NonNullable<typeof state.auth.token>;
      api.dispatch(authorize({
        token,
        ...refreshResult.data,
        user
      }))
      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(logout())
    }
  }
  return result
}

const baseApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({})
})

export { baseQuery, baseQueryWithReauth, baseApi };
