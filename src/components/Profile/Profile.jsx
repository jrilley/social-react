import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Redirect} from "react-router-dom";

const Profile = ( props ) => {
    if (props.isAuth) {
        return <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer store={props.store}/>
        </div>
    }else {
        return <Redirect to='/login'/>
    }
}


export default Profile;