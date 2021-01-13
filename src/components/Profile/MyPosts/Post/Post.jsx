import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg"/>
            {props.message}
            <div>
                <span>{props.likes} Likes</span>
            </div>
        </div>
    )
}

export default Post;