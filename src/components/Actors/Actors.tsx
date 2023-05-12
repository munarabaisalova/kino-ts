import React, {useEffect} from 'react';
import {useAppDispatch} from "../Hooks/useAppDispatch";
import {Link, useParams} from "react-router-dom";
import {useAppSelector} from "../Hooks/useAppSelector";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination, Scrollbar} from "swiper";
import {getActors} from "../../store/Reducers/CreateUrl";


const Actors = () => {
    const {error, loader, actor} = useAppSelector(state => state.ActorSlice)
    const {detailId} = useParams()
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getActors(detailId))
    }, [])
    console.log(actor, 'actor')
    return (
        <div className=''>
            <Swiper

                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={2}
                slidesPerView={5}
                navigation
                pagination={{clickable: true}}
                scrollbar={{draggable: true}}

            >
                {
                    actor.slice(0, 15).map((el, idx) => (
                        <SwiperSlide>
                            <div className='w-[200px] ml-[55px]'>
                                <Link to={`/movies/details/actors/${el.id}`}>
                                    <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${el.profile_path}`}
                                         width={155} alt=""/>
                                </Link>
                                <h1>{el.character}</h1>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Actors;