import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit"
import { RootState } from '@/redux/store';
import Cookies from 'js-cookie'

export interface totalResumeState {
  phones: number;
  emails: number;
  companies: number;
  webs: number;
}

export interface totalResumePayload {
  phones: number;
  emails: number;
  companies: number;
  webs: number;
}

const initialState: totalResumeState = {
  phones: 0,
  emails: 0,
  companies: 0,
  webs: 0,
};

export const totalResumeSlice = createSlice({
  name: 'totalResume',
  initialState,
  reducers: {
    setTotalResume: (state, action: PayloadAction<totalResumePayload>) => {
      if (typeof window !== "undefined") {
        Cookies.set('wbtotals',JSON.stringify({
          phones: action.payload.phones,
          emails: action.payload.emails,
          companies: action.payload.companies,
          webs: action.payload.webs
        }))
      }
      state.phones=action.payload.phones;
      state.emails=action.payload.emails;
      state.companies=action.payload.companies;
      state.webs=action.payload.webs;
    },
  },
})

export const { setTotalResume } = totalResumeSlice.actions;
export default totalResumeSlice.reducer;
export const selectTotalResume = (state: RootState) => state.totalResume;

export const selectCompanies = createSelector(
  selectTotalResume,
  (state) => state.companies
)
export const selectEmails = createSelector(
  selectTotalResume,
  (state) => state.emails
)
export const selectPhones = createSelector(
  selectTotalResume,
  (state) => state.phones
)
export const selectWebs = createSelector(
  selectTotalResume,
  (state) => state.webs
)