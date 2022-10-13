import React from "react";
import style from './section.module.css'
import Posts from "./Posts/Posts";

const Section = () => {
    return (
        <section>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Post</button>
            <Posts/>
        </section>
    )
}

export default Section;