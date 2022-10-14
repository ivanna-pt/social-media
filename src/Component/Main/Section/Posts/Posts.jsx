import React from "react";
import style from "./posts.module.css";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/state";

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

    let newPostElement = React.createRef();

    let addPost = () => {
        newPostElement.current.value = '';
        props.dispatch(addPostActionCreator());
        console.log(props)
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    // let addPost = () => {
    //     let text = newPostElement.current.value;
    //     alert(text);
    //     let newPost = {
    //         id: 6,
    //         message: text,
    //         likeCount: 0
    //     }
    // }

    return (
        <div>
            <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} name="" id="" cols="30" rows="10"></textarea>
            <button onClick={addPost}>Post</button>
            {postElement}
        </div>
    )
}

export default Posts;