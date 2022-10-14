import React from "react";
import style from './section.module.css'
import Posts from "./Posts/Posts";
import Profile from "./Profile/Profile";

const Section = (props) => {
    return (
        <section>
            <Profile/>
            <Posts posts={props.profilePage.posts} store={props.store} dispatch={props.dispatch} />
        </section>
    )
}

export default Section;