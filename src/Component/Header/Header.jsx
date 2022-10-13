import React from "react";
import style from './header.module.css';
import logo from './logo.png'

const Header = () => {
    return (
        <header className={style.header}>
            <img src={logo} alt="logo" width='60'/>
            Header
        </header>
    )
}

export default Header;