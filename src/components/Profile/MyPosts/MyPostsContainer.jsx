import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import StoreContext from '../../../StoreContext';

const MyPostsContainer = () => {
    return <StoreContext>
        {(store) => {
            let state = store.getState().profilePage;

            let addPost = () => {
                store.dispatch(addPostActionCreator());
            };

            let onValueChange = (text) => {
                store.dispatch(updateNewPostTextActionCreator(text));
            };

            return <MyPosts onValueChange={onValueChange}
                            addPost={addPost}
                            profilePage={state}
            />
        }
        }
    </StoreContext>
};

export default MyPostsContainer;