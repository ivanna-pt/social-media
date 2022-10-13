import React from "react";
import style from './feed.module.css';

const Feed = () =>{
    return (
        <div className={style.feed}>
            <div className={style.feedItem}>Post 1</div>
            <div className={style.feedItem}>Post 2</div>
            <div className={style.feedItem}>Post 3</div>
        </div>
    )
}

export default Feed;