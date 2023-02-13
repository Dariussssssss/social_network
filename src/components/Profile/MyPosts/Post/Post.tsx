import React from 'react';
import s from './Post.module.css';

export type TypeOfPost = {
    message: string,
    likesCount: number
}

export const Post = (props: TypeOfPost) => {
    return (
        <div className={s.post}>
            <img src="https://www.soyuz.ru/public/uploads/files/2/7615287/20221219115607f2986eae3a.jpg" alt="ava"/>
            <div className={s.post}>{props.message}</div>
            <span>likes</span>{props.likesCount}
        </div>

    )
}