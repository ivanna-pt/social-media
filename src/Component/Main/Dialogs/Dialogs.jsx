import React from "react";
import style from './dialogs.module.css';
import {NavLink} from "react-router-dom";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";



const DialogMessage = (props) => {
    return (
        <div className={style.dialogItem}>
            {props.text}
        </div>
    )
}

const LinkUser = (props) => {
    let path = '/dialogs/' + props.id;
    return (
       <div>
           <NavLink to={path}>{props.name}</NavLink>
       </div>
    )
}



const Dialogs = (props) => {
    let usersLink = props.dialogsPage.users.map(link => <LinkUser name={link.name} id={link.id}/>);
    let routes = props.dialogsPage.users.map(user => (
        {path: '/dialogs/' + user.id, exact: true, name: user.name, message: user.message}
    ));

    return (
            <div className={style.dialogs}>
                <div className={style.dialogsLeft}>
                    {usersLink}
                </div>

                <div className={style.dialogsRight}>
                    <Routes>
                            {routes.map( (route, index) => (
                                <Route key={index} path={route.path} exact={route.exact} render={() => <DialogMessage text={route.message}/>} />))}
                    </Routes>
                </div>
            </div>
    )
}


export default Dialogs;