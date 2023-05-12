import {AppDispatch} from "../index";
import {getPopularError, getPopularSuccess} from "./CreateSlice";
import axios from "axios";
import {ApiKey} from "../../components/ApiKey/ApiKey";
import {getTopRatedLoading, getTopRatedError, getTopRatedSuccess} from "./TopRatedSlice";
import {
    darkFetching,
    detailFetching,
    detailFetchingError,
    detailFetchingSuccess,
    languageFetching
} from "./DetailSlice";
import {actorFetching, actorFetchingError, actorFetchingSuccess} from "./ActorSlice";
import {searchFetching, searchFetchingError, searchFetchingSuccess} from "./Search";
import {videosFetching, videosFetchingSuccess} from "./TrilerSlice";


export const getPopular = (lan: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            // dispatch(getPopulars())
            const responce = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=${lan}-US&page=1`)
            dispatch(getPopularSuccess(responce.data.results))
        } catch (e: any) {
            dispatch(getPopularError(e.message))
        }
    }
}

export const getTopRated = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(getTopRatedLoading())
            const responce = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}&language=en-US&page=1`);
            dispatch(getTopRatedSuccess(responce.data.results))
        } catch (e: any) {
            dispatch(getTopRatedError(e.message))
        }
    }
}

export const getDetail = (id: any  , language: string ) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(detailFetching())
            const responce = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}&language=${language}`)
            dispatch(detailFetchingSuccess(responce.data))
        } catch (e: any) {
            dispatch(detailFetchingError(e.message))
        }
    }
}


export const getActors = (id: number | any) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(actorFetching())
            const responce = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${ApiKey}&language=en-US`)
            dispatch(actorFetchingSuccess(responce.data.cast))
        } catch (e: any) {
            dispatch(actorFetchingError(e.message))
        }
    }
}

export const getSearch = (name: string | any) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(searchFetching())
            const responce = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${name}`)
            dispatch(searchFetchingSuccess(responce.data.results))
        } catch (e: any) {
            dispatch(searchFetchingError(e.message))
        }
    }
}

export const getDark = () => (dispatch: AppDispatch) => {
    dispatch(darkFetching())
}

export const getLanguage = (lan: string) => (dispatch: AppDispatch) => {
    dispatch(languageFetching(lan))
}


export const getTrailer = (id: any) => {
    return async (dispatch: AppDispatch) => {
        dispatch(videosFetching())
        const response = await axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${ApiKey}&language=en-US`)
        const {data} = await response
        dispatch(videosFetchingSuccess(data.results.slice(0,4)))
    }
}




