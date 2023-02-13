import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';

export const MyPosts = () => {

    return (
        <section className={s.posts}>
            <div className={s.myPosts}>
                <h3>My posts:</h3>
                <div className={s.newPost}>
                    <textarea name="post" id="post"></textarea>
                    <button>Send post</button>
                </div>
                <div className={s.posts}>
                    <Post message={'loremfkfkfk'} likesCount={3}/>
                    <Post message={'dfjhfdjf'} likesCount={0}/>
                    <Post message={'dfgjf'} likesCount={2}/>
                </div>
            </div>
        </section>

    )
}