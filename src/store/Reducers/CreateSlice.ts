import {IPopularState} from "../interface";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IPopular {
    users: IPopularState[],
    loading: boolean,
    error: string
}

const initialState: IPopular = {
    users: [],
    loading: false,
    error: ""
}

export const PopularSlice = createSlice({
    name: "POPULAR",
    initialState,
    reducers: {
        getPopular(state) {
            state.loading = true
        },
        getPopularSuccess(state, action:PayloadAction<IPopularState[]>) {
            state.loading = true
            state.users = action.payload
            state.error = ""
        },
        getPopularError(state, action:PayloadAction<IPopularState[]>) {
            state.error = "error"
        }
    },
})

export const {getPopular, getPopularSuccess, getPopularError} = PopularSlice.actions
export default PopularSlice.reducer