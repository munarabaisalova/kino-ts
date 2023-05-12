import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface IDetailSlice {
    loader: boolean
    error: string | null
    detail: any,
    dark: boolean,
    language: string
}

const initialState: IDetailSlice = {
    loader: false,
    error: '',
    detail: {},
    dark: false,
    language: ''
}

export const DetailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {
        detailFetching(state) {
            state.loader = true
        },
        detailFetchingSuccess(state, action: PayloadAction<any>) {
            state.loader = false
            state.detail = action.payload
        },
        detailFetchingError(state, action: PayloadAction<string>) {
            state.loader = false
            state.error = action.payload
            state.detail = {}
        },
        darkFetching(state) {
            state.dark = !state.dark
        },
        languageFetching(state, action: PayloadAction<string>) {
            state.language = action.payload
        }
    }
})

export default DetailSlice.reducer
export const {languageFetching,darkFetching ,detailFetching, detailFetchingSuccess, detailFetchingError} = DetailSlice.actions