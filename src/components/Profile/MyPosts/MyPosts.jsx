import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div>
                <Post message="Hi, i am there" likes="15" />
                <Post message="Hello world" likes="20" />
            </div>
        </div>
    )
}

export default MyPosts;