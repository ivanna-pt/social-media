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

let posts = [
    {id: 1, message: "Some text one", likeCount: 5},
    {id: 2, message: "Some text two", likeCount: 18},
    {id: 3, message: "Some text three", likeCount: 0},
    {id: 4, message: "Some text four", likeCount: 10},
    {id: 5, message: "Some text five", likeCount: 7},
]

let postElement = posts.map(post => <Post message={post.message} likes={post.likeCount}/>)

const Posts = () => {
    return (
        <div>
            {postElement}
        </div>
    )
}

export default Posts;