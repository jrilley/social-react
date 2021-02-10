import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userImage from "../../../assets/images/User-Icon.jpg";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.cover}>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
            </div>
            <div className={s.avatar}>
                <img src={props.profile.photos.large}/>
            </div>
            <div className={s.description}>
                <span className={s.fullName}>{props.profile.fullName}</span>
                <hr/>
                <div>{props.profile.lookingForAJob
                    ? <img src="https://png.pngtree.com/png-vector/20191122/ourmid/pngtree-recruitment-concept-of-job-search-flat-vector-with-people-workers-business-png-image_2018509.jpg" />
                    : null}</div>
                <hr/>
                <span>{props.profile.lookingForAJobDescription}</span>
                <hr />
                <span>{props.profile.contacts.facebook}</span>
            </div>
        </div>
    );
}

export default ProfileInfo;