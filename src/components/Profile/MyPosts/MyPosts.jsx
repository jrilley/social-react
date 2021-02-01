import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.posts.map( post => <Post message={post.message} likes={post.LikesCount} /> );

    let addPost = () => {
        props.addPost();
    };

    let onValueChange = (e) => {
        let text = e.target.value;
        props.onValueChange(text);
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