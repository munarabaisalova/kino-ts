import React, {useState} from 'react';
import LOGO from "../../img/logo.svg"
import {Link, NavLink, useNavigate} from "react-router-dom";
import {BsSearch} from "react-icons/bs";
import {FaPlus} from "react-icons/fa";
import "./header.scss"
import {ChangeEvent} from "react";
import {useAppDispatch} from "../Hooks/useAppDispatch";
import {useAppSelector} from "../Hooks/useAppSelector";
import {getDark, getLanguage, getSearch} from "../../store/Reducers/CreateUrl";

const Header = () => {
    const [value, setValue] = useState('')
    const navigate = useNavigate()
    const {dark} = useAppSelector(s => s.DetailSlice)
    console.log(dark)
    const dispatch = useAppDispatch()
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
    const navigateToResult = () => {
        navigate(`/movies/result/${value}`)
        dispatch(getSearch(value))
    }

    const handleLanguage = (e: React.ChangeEvent<any>) => {
        dispatch(getLanguage(e.target.value))
    }
    const addDark = () => {
        dispatch(getDark())
    }
    return (
        <div id='header'>
            <div className='header'>

                <Link to={'/'}>
                    <img src={LOGO} width={250} alt=""/>
                </Link>

                <nav className='header-nav text-xl '>
                    <NavLink to={'/'}>Films</NavLink>
                    <NavLink className='p-8' to={'/popular'}>series</NavLink>
                    <NavLink to={'/top-rated'} className='mx-2'>Persons</NavLink>
                    <NavLink to={'/top-rated'}>More</NavLink>
                </nav>
               <div className='text-emerald-50 text-2xl' onClick= { navigateToResult}> <FaPlus /></div>
                <div className='flex'>

                </div>
                <div>

                    <select id="language" onChange={e => handleLanguage(e)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="en-US">english</option>
                        <option value="ru-RU">russian</option>
                    </select>

                </div>
                <div onClick={addDark} className='dark-mode' style={{
                    background: "white"
                }}>
                    dark
                </div>
                <div className='header-nav__input'>

                    <input onChange={handleChange} type="text" id="first_name"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="search" required/>
                </div>
                <button disabled={!value.length} onClick={navigateToResult}className='header-nav__button'>
                    <BsSearch/></button>
            </div>
        </div>
    );
};

export default Header;