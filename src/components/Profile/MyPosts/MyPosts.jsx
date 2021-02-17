import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLength300, renderField, required} from "../../../helpers/ValidationForm";

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likes={post.LikesCount}/>);


    let addNewPost = (value) => {
        props.addPost(value.newPostText)
    }

    return (
        <div>
            <h3>My post</h3>
            <div>
                <AddPostFormRedux onSubmit={addNewPost}/>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
};



const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                placeholder={"Введите сообщение"}
                component={renderField("textarea")}
                name="newPostText"
                validate={[required, maxLength300]}
            />
            <button>Add Post</button>
        </form>
    );
};

let AddPostFormRedux = reduxForm({
    form: "addPostFrom"
})(AddPostForm);

export default MyPosts;