import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePicture from '../../../../../components/ProfilePicture/ProfilePicture';

function FriendsListItem({ user }: {user: any}) {
  return (
    <Link
      to={`/users/${user.id_user}`}
      key={user.id_user}
    >
      <div className="list-item-delete">
        {user.first_name}
        <ProfilePicture
          userPicture="empty"
          userName="empty"
          alt="empty"
          size={30}
        />
      </div>
    </Link>
  );
}

export default FriendsListItem;
