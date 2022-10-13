import React from "react";
import style from './dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = () => {
    return (
        <div className={style.dialogItem}>Text message from ... </div>
    )
}

const DialogUser = (props) => {
    let path = '/dialogs/'+ props.id;
    return (
        <div className={style.dialogUser}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsLeft}>
                <DialogUser name='John' id='01'/>
                <DialogUser name='Kate' id='02'/>
                <DialogUser name='Travis' id='03'/>
                <DialogUser name='Peter' id='04'/>
            </div>
            <div className={style.dialogsRight}>
                <DialogItem/>
            </div>
        </div>
    )
}
export default Dialogs;