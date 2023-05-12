import React from 'react';
import {useAppSelector} from "../Hooks/useAppSelector";


const SearchResult = () => {
    const {search} = useAppSelector(state => state.SearchSlice)
    return (
        <div id='popular'>
            <div className='popular'>
                {
                    search.map((el, idx) => (
                        <div>
                            <img src={``} alt=""/>
                            <h1>{el.title}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default SearchResult;