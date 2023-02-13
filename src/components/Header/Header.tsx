import React from 'react';
import s from './Header.module.css';


export const Header = () => {
    return (
        <header className={s.header}>
            <img src="src/components/Header/Header#" alt="logo" className={s.logo}/>
        </header>
    )
}