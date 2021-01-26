import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    // debugger;
    let postsElements = props.posts.map( post => <Post message={post.message} likes={post.LikesCount} /> );

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onValueChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div>
            <h3>My post</h3>
            <div>
                <textarea onChange={onValueChange} value={props.newPostText} />
                <button onClick={ addPost }>Add Post</button>
            </div>
            <div>
                { postsElements }
            </div>
        </div>
    )
};

export default MyPosts;