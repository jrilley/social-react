import React from 'react';
import s from './ProfileInfo.module.css';
import userImage from "../../../assets/images/User-Icon.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    const loadNewImage = (e) => {
        props.savePhoto(e.currentTarget.files[0]);
    };

    return (
        <div>
            <div className={s.avatar}>
                {props.profile.photos.large
                    ? <img src={props.profile.photos.large} alt="avatar"/>
                    : <img src={userImage} alt={"avatar"} />
                }
            </div>
            {
                props.profile.userId === props.authorizedUserId &&
                <input type="file" onChange={loadNewImage} accept="image/*,image/jpeg"/>
            }
            <div className={s.description}>
                <span className={s.fullName}>{props.profile.fullName}</span>

                 <ProfileStatusWithHooks status={props.status} profileUId={props.profile.userId} authorizedUserId={props.authorizedUserId} updateStatus={props.updateStatus}/>

                <hr/>
                <div>{props.profile.lookingForAJob
                    ? <img src="https://png.pngtree.com/png-vector/20191122/ourmid/pngtree-recruitment-concept-of-job-search-flat-vector-with-people-workers-business-png-image_2018509.jpg" />
                    : <span>Looking for a job</span>}</div>
                <hr/>
                <span>{props.profile.lookingForAJobDescription
                    ? props.profile.lookingForAJobDescription
                    : "Job description"}</span>
                <hr />
                <span>{props.profile.contacts.facebook
                    ? props.profile.contacts.facebook
                    : "There is facebook contacts"}</span>
            </div>
        </div>
    );
}

export default ProfileInfo;