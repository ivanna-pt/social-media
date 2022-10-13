import React from "react";
import style from './main.module.css';


const Main = (props) => {
    return (
        <main>
            {props.children}
        </main>
    )
}

export default Main;