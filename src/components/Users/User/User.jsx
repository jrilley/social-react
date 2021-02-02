import React from 'react';
import s from './User.module.css';

const User = (props) => {

    return (
        <div className={s.users}>
            <div className={s.userItems}>
                <div className={s.userAvatar}>
                    <img src={props.avatar} alt="avatar"/>
                </div>
                <div className={s.userInformation}>
                    <div className={s.userInfName}><span>{props.name}</span></div>
                    <div className={s.userInfSex}><span>{props.sex}</span></div>
                    <div className={s.userInfCountry}><span>{props.country}</span></div>
                </div>
                <div className={s.userButton}>
                    <input type="submit" value="follow" />
                </div>
            </div>
        </div>
    );

}

export default User;