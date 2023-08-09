import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from '@/redux/store';
import Cookies from 'js-cookie'
import { TOTAL_FILTERS } from "@/types";

export interface TotalCounterState {
  trades: string[];
  cities: string[];
  states: string[];
  sizes: string[];
}

export interface TotalFilterPayload {
  filter: TOTAL_FILTERS,
  toggle: string[];
}


const initialState: TotalCounterState = {
  trades: [],
    /* (Cookies.get("wbf_totals_trades") 
      && JSON.parse(Cookies.get("wbf_totals_trades") as string)) 
      || [], */
  cities: [],
    /* (Cookies.get("wbf_totals_cities") 
      && JSON.parse(Cookies.get("wbf_totals_cities") as string)) 
      || [], */
  states: [],
    /* (Cookies.get("wbf_totals_states") 
      && JSON.parse(Cookies.get("wbf_totals_states") as string)) 
      || [], */
  sizes: []
    /* (Cookies.get("wbf_totals_sizes") 
      && JSON.parse(Cookies.get("wbf_totals_sizes") as string)) 
      || [], */
};

const totalCounterSlice = createSlice({
  name: 'totalCounter',
  initialState,
  reducers: {
    toggleTotal: (state, action: PayloadAction<TotalFilterPayload>) => {
      /* if (!state.wbtypes.includes(action.payload.wbtype)){
        state.wbtypes.push(action.payload.wbtype);
      } else {
        state.wbtypes.splice(state.wbtypes.indexOf(action.payload.wbtype), 1);
      }
      if (typeof window !== "undefined") {
        Cookies.set('wbf_totals_types',JSON.stringify(state.wbtypes))
      } */
      const filter = action.payload.filter;
      const toggle = action.payload.toggle;
      if(filter === TOTAL_FILTERS.CITIES) {
        state.cities = state.cities.filter((city: string) => !toggle.includes(city));
        state.cities.push(...toggle.filter((city: string) => !state.cities.includes(city)));
      }
      if(filter === TOTAL_FILTERS.STATES) {
        state.states = state.states.filter((st: string) => !toggle.includes(st));
        state.states.push(...toggle.filter((st: string) => !state.states.includes(st)));
      }
      if(filter === TOTAL_FILTERS.TRADES) {
        state.trades = state.trades.filter((trade: string) => !toggle.includes(trade));
        state.trades.push(...toggle.filter((trade: string) => !state.trades.includes(trade)));
      }
      if(filter === TOTAL_FILTERS.SIZES) {
        state.sizes = state.sizes.filter((size: string) => !toggle.includes(size));
        state.sizes.push(...toggle.filter((size: string) => !state.sizes.includes(size)));
      }
    },
  },
})

export const { toggleTotal } = totalCounterSlice.actions;

export const selectTotalTrades = (state: RootState) => state.totalCounter.trades;
export const selectTotalCities = (state: RootState) => state.totalCounter.cities;
export const selectTotalStates = (state: RootState) => state.totalCounter.states;
export const selectTotalSizes = (state: RootState) => state.totalCounter.sizes;

export default totalCounterSlice.reducer;