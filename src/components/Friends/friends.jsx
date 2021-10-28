import React from "react";
import PropTypes from "prop-types";
import s from './friends.module.scss'

const FriendsList = ({ friends }) => (
    <ul className={s.friendsInfo}>
        {friends.map((friend) => {
            let isOnline = 'onLine'
            return (
               <li className={s.item} key={friend.id}>
        <span className={isOnline? s['onLine']: s['offLine']}></span>
        <div className={s.friend_wrapper}>
            <img className={s.avatar} src={friend.avatar} alt={friend.name} width="48" />
            <p className={s.name}>{friend.name}</p>
        </div>
       
    </li>
            )
        })}
    </ul>
);


FriendsList.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.oneOf(['onLine', 'offLine']),
};
export default FriendsList;
