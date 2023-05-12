import React, {useEffect} from 'react';
import {useAppDispatch} from "../Hooks/useAppDispatch";
import {useAppSelector} from "../Hooks/useAppSelector";
import {useParams} from "react-router-dom";
import {GetActorsDetails} from "../../store/Reducers/DetailActors";

const ActorPeople = () => {
    const dispatch = useAppDispatch()
    const {DetailActor} = useAppSelector(s => s.DetailActorSlice)
    const {peopleID} = useParams()

    useEffect(() => {
        dispatch(GetActorsDetails(peopleID))
    }, [peopleID])

    console.log(DetailActor)

    return (
        <div className='flex p-8'>
            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${DetailActor.profile_path}`} width={400}
                 alt=""/>
            <div className='ml-10'>
                <h1>{DetailActor.name}</h1>
                <h2 className='pt-8'>{DetailActor.biography}</h2>
            </div>
        </div>
    );
};

export default ActorPeople;