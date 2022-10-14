import React from "react";
import style from './dialogs.module.css';
import {NavLink} from "react-router-dom";
import {
    Routes,
    Route
} from "react-router-dom";

const LinkUser = (props) => {
    let path = '/dialogs/' + props.id;
    return (
       <div>
           <NavLink to={path}>{props.name}</NavLink>
       </div>
    )
}

const DialogMessage = (props) => {
    return (
        <div className={style.dialogItem}>
            {props.text}
        </div>
    )
}

const RouterElement = (props) => {
    // let dialogElement = <DialogMessage text={props.text}/>;
    // let routes = {props};
    console.log(props.arr)
    return (
        <Routes>
            {props.arr.map( (route, index) => (
                // console.log(route)

                // <Route key={index} path={route.path} exact={route.exact} render={() => <DialogMessage text={route.message}/>} />

                <Route key={index} path={route.path} exact={route.exact} render={() => {
                    return (
                        <div className={style.dialogItem}>
                            {/*{route.message}*/}
                            Some text
                        </div>
                        );
                } } />

                // <Route key={index} path={route.path} exact={route.exact}  element={<DialogMessage text={route.message}/>} />

               ))}
        </Routes>
        // <Routes>
        //     <Route path={props.path} exact={props.exact} element={dialogElement}/>
        // </Routes>
    )
}

const Dialogs = (props) => {
    let usersLink = props.dialogsPage.users.map(link => <LinkUser name={link.name} id={link.id}/>);
    let routes = props.dialogsPage.users.map(user => (
        {path: '/dialogs/' + user.id, exact: true, name: user.name, message: user.message}
    ));
    // console.log(routes);

    return (
            <div className={style.dialogs}>
                <div className={style.dialogsLeft}>
                    {usersLink}
                </div>



                <div className={style.dialogsRight}>
                    <RouterElement arr={routes}/>

                    {/*<Routes>*/}
                    {/*    {routes.map( (route, index) => (*/}
                    {/*            <Route key={index} path={route.path} exact={route.exact}  render={() => <DialogMessage text={route.message}/>} />))}*/}
                    {/*</Routes>*/}
                </div>
            </div>
    )
}


export default Dialogs;