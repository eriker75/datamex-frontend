import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from '@/redux/store';
import { WithNull } from '@/types/WithNull';
import Cookies from "js-cookie";

export interface AuthState {
    user: string;
    token: string;
}
  
const initialState: WithNull<AuthState> = {
    user: null,
    token: Cookies.get("jwt") || null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state, action : PayloadAction<AuthState>) => {
            const { user, token } = action.payload
            Cookies.set("jwt",token);
            state.user = user;
            state.token = token;
        },
        logOut: (state, action: PayloadAction<void>) => {
            state.user = null
            state.token = null
        }
    },
})

export const { logIn , logOut } = authSlice.actions
export default authSlice.reducer
export const selectCurrentUser = (state : RootState) => state.auth.user
export const selectCurrentToken = (state : RootState) => state.auth.token