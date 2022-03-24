import React from 'react';

function UserListItem({ user }: {user:any}) {
  return (
    <div className="list-item-delete space-around-delete">
      <div>
        Name:
        {' '}
        {user.first_name}
      </div>
      <input type="checkbox" />
    </div>
  );
}

export default UserListItem;
