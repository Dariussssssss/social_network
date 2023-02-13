import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';

export const Profile = () => {
    return (
    <main className={s.main}>
        <section className={s.img__wrapper}>
            <img src="src/components/Profile/Profile#" alt={s.image__wrapper}/>
        </section>
        <section className={s.about}>
            
        </section>
        <MyPosts/>
    </main>
    )
}