import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppDispatch} from "../index";
import axios from "axios";
import {ApiKey} from "../../components/ApiKey/ApiKey";

interface IActorSlice {
    loader: boolean
    error: string | null
    DetailActor: Partial<any>
}

const initialState:IActorSlice = {
    loader: false,
    error: '',
    DetailActor: {}
}

export const DetailActorSlice = createSlice({
    name: 'ACTORS_DETAIL',
    initialState,
    reducers: {
        actorFetchings(state) {
            state.loader = true
        },
        actorFetchingSuccesss(state, action: PayloadAction<any>){
            state.loader = false
            state.DetailActor = action.payload
        },
        actorFetchingErrors(state, action: PayloadAction<string>) {
            state.loader = false
            state.error = action.payload
            state.DetailActor = {}
        }
    }
})

export default DetailActorSlice.reducer
export const {actorFetchings, actorFetchingSuccesss, actorFetchingErrors} = DetailActorSlice.actions

export const GetActorsDetails = (id: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(actorFetchings())
        const url = await axios(`https://api.themoviedb.org/3/person/${id}?api_key=${ApiKey}&language=en-US`)
        const {data} = await url
        dispatch(actorFetchingSuccesss(data))
    } catch (e) {
        dispatch(actorFetchingErrors("Error..."))
    }
}