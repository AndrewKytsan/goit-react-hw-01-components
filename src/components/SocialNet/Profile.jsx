import React from "react";
import PropTypes from "prop-types";
import s from './Profile.module.scss'
const UserProfile = ({ name, tag, location, avatar, stats }) => (
    <div className={s.profile}>
        <div className={s.about}>
            <img src={avatar} alt={name} className={s.avatar} />
            <p className={s.userName}>{name}</p>
            <p className={s.userTag}>@{tag}</p>
            <p className={s.userLocation}>{location}</p>
        </div>
        <ul className={s.userStats}>
            <li className={s.userStats_item}>
                <span className={s.userStats_label}>Followers</span>
                <span className={s.userStats_quantity}>{stats.followers}</span>
            </li>
            <li className={s.userStats_item}>
                <span className={s.userStats_label}>Vievs</span>
                <span className={s.userStats_quantity}>{stats.views}</span>
            </li>
             <li className={s.userStats_item}>
                <span className={s.userStats_label}>Likes</span>
                <span className={s.userStats_quantity}>{stats.likes}</span>
            </li>    
        </ul>
    </div>
);

UserProfile.propTypes = {
    avatar: PropTypes.string,
    tag: PropTypes.string,
    name: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    }),
};
export default UserProfile;