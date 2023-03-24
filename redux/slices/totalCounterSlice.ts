import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from '@/redux/store';

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
  wbtypes: [],
  cities: [],
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
    },
    toggleCity: (state, action: PayloadAction<cityPayload>) => {
      if (!state.cities.includes(action.payload.city)){
        state.cities.push(action.payload.city);
      } else {
        state.cities.splice(state.cities.indexOf(action.payload.city), 1);
      } 
    },
  },
})

export const { toggleType, toggleCity } = totalCounterSlice.actions;
export default totalCounterSlice.reducer;
export const selectTotalWbTypes = (state: RootState) => state.totalCounter.wbtypes;
export const selectTotalCities = (state: RootState) => state.totalCounter.cities;