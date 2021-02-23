import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return <div>
        <ProfileInfo profile={props.profile} status={props.status} authorizedUserId={props.authorizedUserId} updateStatus={props.updateStatus}/>
        <MyPostsContainer store={props.store}/>
    </div>
}


export default Profile;