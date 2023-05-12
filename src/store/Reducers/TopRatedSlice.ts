import {ITopRatedState} from "../interface";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface ITopRated {
    users: ITopRatedState[],
    loading: boolean,
    error: string
}

const initialState: ITopRated = {
    users: [],
    loading: false,
    error: ""
}

export const TopRatedSlice = createSlice({
    name: "TopRated",
    initialState,
    reducers: {
        getTopRatedLoading(state) {
            state.loading = true
        },
        getTopRatedSuccess(state, action:PayloadAction<ITopRatedState[]>) {
            state.loading = true
            state.users = action.payload
            state.error = ""
        },
        getTopRatedError(state, action:PayloadAction<string>) {
            state.error = action.payload
        }
    },
})

export const {getTopRatedLoading, getTopRatedSuccess,getTopRatedError} = TopRatedSlice.actions
export default TopRatedSlice.reducer