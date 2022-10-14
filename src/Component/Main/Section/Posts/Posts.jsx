import React from "react";
import style from "./posts.module.css";

const Post = (props) => {
    return (
        <div className={style.postItem}>
            <p>{props.message}</p>
            <button>Likes {props.likes}</button>
        </div>
    )
}


const Posts = (props) => {
    let postElement = props.posts.map(post => <Post message={post.message} likes={post.likeCount}/>)
    return (
        <div>
            {postElement}
        </div>
    )
}

export default Posts;