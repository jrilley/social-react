import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPostsContainer = (props) => {

    let state = props.store.getState().profilePage;

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onValueChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <MyPosts onValueChange={onValueChange}
                 addPost={addPost}
                 profilePage={state}
        />
    )
};

export default MyPostsContainer;