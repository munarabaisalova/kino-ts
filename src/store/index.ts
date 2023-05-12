import {combineReducers, configureStore} from "@reduxjs/toolkit";
import PopularSlice from "./Reducers/CreateSlice";
import TopRatedSlice from "./Reducers/TopRatedSlice";
import DetailSlice from "./Reducers/DetailSlice";
import ActorSlice from "./Reducers/ActorSlice";
import SearchSlice from "./Reducers/Search";
import DetailActorSlice from "./Reducers/DetailActors";
import TrailerSlice from "./Reducers/TrilerSlice";


const rootState = combineReducers({
    PopularSlice,
    TopRatedSlice,
    DetailSlice,
    ActorSlice,
    SearchSlice,
    DetailActorSlice,
    TrailerSlice
})

export const setUpStore = () => {
    return configureStore({
        reducer: rootState
    })
}

export type rootState = ReturnType<typeof rootState>

type AppStore = ReturnType<typeof setUpStore>
export type AppDispatch = AppStore["dispatch"]