import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    // debugger;
    let postsElements = props.posts.map( post => <Post message={post.message} likes={post.LikesCount} /> );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onValueChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div>
            <h3>My post</h3>
            <div>
                <textarea ref={newPostElement} onChange={onValueChange} value={props.newPostText} />
                <button onClick={ addPost }>Add Post</button>
            </div>
            <div>
                { postsElements }
            </div>
        </div>
    )
};

export default MyPosts;