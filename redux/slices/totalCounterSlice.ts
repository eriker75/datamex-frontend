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
    addType: (state, action: PayloadAction<wbtypePayload>) => {
      if (!state.wbtypes.includes(action.payload.wbtype))
        state.wbtypes.push(action.payload.wbtype);
    },
    removeType: (state, action: PayloadAction<wbtypePayload>) => {
      state.wbtypes.splice(state.wbtypes.indexOf(action.payload.wbtype), 1);
    },
    addCity: (state, action: PayloadAction<cityPayload>) => {
      if (!state.cities.includes(action.payload.city))
        state.cities.push(action.payload.city);
    },
    removeCity: (state, action: PayloadAction<cityPayload>) => {
      state.cities.splice(state.wbtypes.indexOf(action.payload.city), 1);
    },
  },
})

export const { addType, removeType, addCity, removeCity } = totalCounterSlice.actions;
export default totalCounterSlice.reducer;
export const selectTotalWbTypes = (state: RootState) => state.totalCounter.wbtypes;
export const selectTotalCities = (state: RootState) => state.totalCounter.cities;