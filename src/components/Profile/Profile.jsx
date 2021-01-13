import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div className={s.cover}>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
            </div>
            <div className={s.avatar}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnYB7pV4de12zrKQayds0fU56TBYw06fYaqQ&usqp=CAU"/>
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;