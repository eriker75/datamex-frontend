import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from '@/redux/store';
import Cookies from 'js-cookie'

export interface totalCounterState {
  wbtypes: string[];
  cities: string[];
}

export interface wbtypePayload {
  wbtype: string;
}

export interface cityPayload {
  city: string;
}


const initialState: totalCounterState = {
  wbtypes: 
    (Cookies.get("wbf_totals_types") 
      && JSON.parse(Cookies.get("wbf_totals_types") as string)) 
      || [],
  cities: 
    (Cookies.get("wbf_totals_types") 
      && JSON.parse(Cookies.get("wbf_totals_cities") as string)) 
      || [],
};

const totalCounterSlice = createSlice({
  name: 'totalCounter',
  initialState,
  reducers: {
    toggleType: (state, action: PayloadAction<wbtypePayload>) => {
      if (!state.wbtypes.includes(action.payload.wbtype)){
        state.wbtypes.push(action.payload.wbtype);
      } else {
        state.wbtypes.splice(state.wbtypes.indexOf(action.payload.wbtype), 1);
      }
      if (typeof window !== "undefined") {
        Cookies.set('wbf_totals_types',JSON.stringify(state.wbtypes))
      } 
    },
    toggleCity: (state, action: PayloadAction<cityPayload>) => {
      if (!state.cities.includes(action.payload.city)){
        state.cities.push(action.payload.city);
      } else {
        state.cities.splice(state.cities.indexOf(action.payload.city), 1);
      } 
      if (typeof window !== "undefined") {
        Cookies.set('wbf_totals_cities',JSON.stringify(state.cities))
      } 
    },
  },
})

export const { toggleType, toggleCity } = totalCounterSlice.actions;
export default totalCounterSlice.reducer;
export const selectTotalWbTypes = (state: RootState) => state.totalCounter.wbtypes;
export const selectTotalCities = (state: RootState) => state.totalCounter.cities;