import { Friend } from './Friends';
import PropTypes from 'prop-types';
import css from './Friendslist.module.css';

export const Friendslist = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <Friend
          key={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        ></Friend>
      ))}
    </ul>
  );
};

Friendslist.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
