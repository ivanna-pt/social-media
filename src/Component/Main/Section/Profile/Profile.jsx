import React from "react";
import style from './profile.module.css';

const Profile = () =>{
    return (
        <div className={style.profile}>
            <div className={style.profileImg}>
                <img src="" alt=""/>
            </div>
            <div className={style.profileUserInfo}>
                <div className={style.userName}>
                    User Name
                </div>
                <div className={style.userStatus}>Online</div>
            </div>
        </div>
    )
}

export default Profile;