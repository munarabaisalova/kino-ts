import React, {useState} from 'react';
import Header from "./components/Header";
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import DetailPage from "./components/page/DetailPage/detailPage";
import {useAppSelector} from "./components/Hooks/useAppSelector";
import {useAppDispatch} from "./components/Hooks/useAppDispatch";
import ActorPeople from "./components/Actors/ActorPeople";
import SearchResult from "./components/SearcgResult";


function App() {
    const dispatch = useAppDispatch()
    const {dark} = useAppSelector(s => s.DetailSlice)

    return (
        <div className="App" style={{
            background: dark ? "black" : "",
            color: dark ? "white": ""
        }}>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/popular'} element={<Popular/>}/>
                <Route path={'/top-rated'} element={<TopRated/>}/>
                <Route path={'/detailPage/:detailId'} element={<DetailPage/>}/>
                <Route path={'/movies/result/:moveName'} element={<SearchResult/>}/>
                <Route path={'/movies/details/actors/:peopleID'} element={<ActorPeople/>}/>

            </Routes>

        </div>
    );
}

export default App;
