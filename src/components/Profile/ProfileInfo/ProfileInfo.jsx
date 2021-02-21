import React from 'react';
import s from './ProfileInfo.module.css';
import userImage from "../../../assets/images/User-Icon.jpg";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {


    const cover = "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg";

    return (
        <div>
            <div className={s.cover}>
                <img src={cover} alt="cover"/>
            </div>
            <div className={s.avatar}>
                {props.profile.photos.large
                    ? <img src={props.profile.photos.large} alt="avatar"/>
                    : <img src={userImage} alt="avatar" />
                }
            </div>
            <div className={s.description}>
                <span className={s.fullName}>{props.profile.fullName}</span>

                 <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>

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