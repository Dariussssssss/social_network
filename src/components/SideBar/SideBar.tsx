import React from 'react';
import s from './SideBar.module.css';
import {NavLink} from 'react-router-dom';


export const SideBar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.nav__list}>
                <li className={s.nav__item}><NavLink to="/profile" className={s.nav__link}>Profile</NavLink></li>
                <li className={s.nav__item}><NavLink to="/dialogs" className={s.nav__link}>Message</NavLink></li>
                <li className={s.nav__item}><NavLink to="/news" className={s.nav__link}>News</NavLink></li>
                <li className={s.nav__item}><NavLink to="/music" className={s.nav__link}>Music</NavLink></li>
                <li className={s.nav__item}><NavLink to="/settings" className={s.nav__link}>Settings</NavLink></li>
            </ul>
        </nav>
    )
}