import React from "react";
import Sun from './Sun.png';
import Moon from "./Moon.png";
import "./DarkMode.css";

const DarkMode = () => {
    const setDarkMode = ()=>{
        document.querySelector('body').setAttribute('data-theme', 'dark')
        localStorage.setItem('selectedTheme', 'dark')
    }

    const setLightMode = ()=>{
        document.querySelector('body').setAttribute('data-theme', 'light')
        localStorage.setItem('selectedTheme', 'light')
    }

    const selectedTheme = localStorage.getItem('selectedTheme')

    if (selectedTheme === 'dark'){
        setDarkMode()
    }

    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode()
    }

    return (
        <div className='dark_mode container-fluid'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                defaultChecked={selectedTheme === 'dark'}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <img src={Sun} className="sun"/>
                <img src={Moon} className="moon"/>
            </label>
        </div>
    );
};

export default DarkMode;
