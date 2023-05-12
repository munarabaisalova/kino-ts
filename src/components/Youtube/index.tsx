import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../Hooks/useAppDispatch";
import {useAppSelector} from "../Hooks/useAppSelector";
import {getTrailer} from "../../store/Reducers/CreateUrl";

const Videos = () => {
    const dispatch = useAppDispatch()
    const {video} = useAppSelector(s => s.TrailerSlice)
    const {detailId} = useParams()
    console.log(video)
    useEffect(() => {
        dispatch(getTrailer(detailId))
    }, [detailId])

    return (
        <div className='containers absolute z-20 flex'>
            {
                video.map(el => (
                    <div className="mx-10">
                        <iframe className='pt-14 ' width="360" height="215"
                                src={`https://www.youtube.com/embed/${el.key}`}
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
                ))
            }

        </div>
    );
};

export default Videos;