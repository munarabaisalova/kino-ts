import React from 'react';
import "./popularDetail.scss"
import {NavLink} from "react-router-dom";

interface IPopular {
    el: {
        id: number
        title: string
        poster_path: string
    }
}

const PopularDetail = ({el}: IPopular) => {
    return (
        <div id='popularDetail'>
            <div className='container'>
                <div className='popularDetail'>
                    <NavLink to={`/detailPage/${el.id}`}>
                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
                    </NavLink>
                    <div className='popularDetail--title'>
                        <h1>{el.title}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularDetail;