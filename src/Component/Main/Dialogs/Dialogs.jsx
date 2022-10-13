import React from "react";
import style from './dialogs.module.css';
import {NavLink} from "react-router-dom";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

let users = [
    {id:1, name: "John", message: 'Hello, dear friend!'},
    {id:2, name: "Kate", message: 'Hi, how are you?'},
    {id:3, name: "Travis", message: "What's up?"},
    {id:4, name: "Peter", message: 'Nice to meet you'},
    {id:5, name: "Joan", message: 'Hello!'}
];

const routes = users.map(user => (
    {path: '/dialogs/' + user.id, exact: true, name: user.name, message: user.message}
));
console.log(routes);

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

let usersLink = users.map(link => <LinkUser name={link.name} id={link.id}/>);

const Dialogs = () => {
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