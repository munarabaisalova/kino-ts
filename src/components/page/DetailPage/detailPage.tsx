import React, {useEffect} from 'react';
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../Hooks/useAppSelector";
import "./detail.scss"
import {getDetail} from "../../../store/Reducers/CreateUrl";
import Actors from "../../Actors/Actors";

function Videos() {
    return null;
}

const DetailPage = () => {
    const {error, loader, detail} = useAppSelector(state => state.DetailSlice)
    const {language} = useAppSelector(state => state.DetailSlice)
    const {detailId} = useParams()
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getDetail(detailId, language))
    }, [detailId, language])
    console.log("ID", typeof detail)
    return (
        <div id='detail' style={{
            background: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${detail.backdrop_path}) no-repeat left/cover`,
            color: "white",
        }}>
            <div className='detail p-8 flex'>
                <div className='detail--img'>
                    <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${detail.backdrop_path}`} alt=""/>
                </div>
                <div className='ml-12 '>
                    <h4 className='leading-10'>{detail.overview}</h4>
                    <h1 className='leading-10'>{detail.title}</h1>
                    <h2>{detail.vote_count}</h2>
                    <h3>{detail.id}</h3>
                </div>
            </div>
            <Actors/>
            <Videos/>
        </div>

    );
};
export default DetailPage;