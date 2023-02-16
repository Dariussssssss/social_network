import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogsItemType = {
    name: string
    id: number
}

type MessageType = {
    message: string
}

const DialogItem: FC<DialogsItemType> = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>

        </div>
    )
}

const Message: FC<MessageType> = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={'User1'} id={1}/>
                <DialogItem name={'User2'} id={2}/>
                <DialogItem name={'User3'} id={3}/>
                <DialogItem name={'User4'} id={4}/>
                <DialogItem name={'User5'} id={5}/>
                <DialogItem name={'User6'} id={6}/>
            </div>

            <div className={s.messages}>
                <Message message={'Lorem ipsum dolor sit amet.'}/>
                <Message message={'Lorem ipsum dolor'}/>
                <Message
                    message={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, veritatis.'}/>
            </div>
        </div>
    )
}