import React from "react";
import style from './nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <NavLink to="/profile">My page</NavLink>
            <NavLink to="/dialogs">Dialogs</NavLink>
            <NavLink to="/friends">Friends</NavLink>
            <NavLink to="/feed">Feed</NavLink>
            <NavLink to="/saved">Saved</NavLink>
        </nav>
    )
}

export default Nav;