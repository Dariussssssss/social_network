import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/1'}>User1</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/2'}>User2</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/3'}>User3</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/4'}>User4</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/5'}>User5</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/6'}>User6</NavLink>
                </div>
            </div>

            <div className={s.messages}>
                <div className={s.message}>
                    Lorem ipsum dolor sit amet.
                </div>
                <div className={s.message}>
                    Lorem ipsum dolor.
                </div>
                <div className={s.message}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, veritatis.
                </div>
            </div>
        </div>
    )
}