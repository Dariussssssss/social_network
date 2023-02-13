import React from 'react';
import s from './ProfileInfo.module.css';


export const ProfileInfo = () => {
    return (
        <>
            <section className={s.img__wrapper}>
                <img src="src/components/Profile/Profile#" alt={s.image__wrapper}/>
            </section>
            <section className={s.about}>

            </section>

        </>
    )
}