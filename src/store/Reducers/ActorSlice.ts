import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IActorTypes} from "../../types/ActorTypes";


interface IActorSlice {
    loader: boolean
    error: string | null
    actor: IActorTypes[]
}

const initialState:IActorSlice = {
    loader: false,
    error: '',
    actor: []
}

export const ActorSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {
        actorFetching(state) {
            state.loader = true
        },
        actorFetchingSuccess(state, action: PayloadAction<IActorTypes[]>){
            state.loader = false
            state.actor = action.payload
        },
        actorFetchingError(state, action: PayloadAction<string>) {
            state.loader = false
            state.error = action.payload
            state.actor = []
        }
    }
})

export default ActorSlice.reducer
export const {actorFetching, actorFetchingSuccess, actorFetchingError} = ActorSlice.actions