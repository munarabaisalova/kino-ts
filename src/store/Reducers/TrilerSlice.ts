import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {ITrailer} from "../interface";

interface ITrailerSlice {
    loader: boolean
    error: string
    video: ITrailer[]
}

const initialState: ITrailerSlice = {
    loader: false,
    error: '',
    video: []
}

export const TrailerSlice = createSlice({
    name: "TRILLER",
    initialState,
    reducers: {
        videosFetching(state) {
            state.loader = true
        },
        videosFetchingSuccess(state, action: PayloadAction<ITrailer[]>){
            state.loader = false
            state.video = action.payload
        },
        videosFetchingError(state, action: PayloadAction<string>) {
            state.loader = false
            state.error = action.payload
            state.video = []
        }
    }
})

export default TrailerSlice.reducer
export const {videosFetching, videosFetchingSuccess, videosFetchingError} = TrailerSlice.actions