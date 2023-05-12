import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ISearch {
    loader: boolean
    error: string
    search: any[]
}

const initialState:ISearch = {
    loader: false,
    error: '',
    search: []
}

export const SearchSlice = createSlice ({
    name: 'Search',
    initialState,
    reducers: {
        searchFetching(state) {
            state.loader = true
        },
        searchFetchingSuccess(state, action:PayloadAction<any[]>) {
            state.loader = false
            state.search = action.payload
        },
        searchFetchingError(state, action:PayloadAction<string>) {
            state.loader = false
            state.search = []
            state.error = action.payload
        }
    }
})

export default SearchSlice.reducer
export const {searchFetching, searchFetchingSuccess, searchFetchingError} = SearchSlice.actions