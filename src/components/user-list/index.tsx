import React from 'react';
import nowSleep from '../../asset/images/now-sleep.png';
import nonSleep from '../../asset/images/non-sleep.png';
import { DummyUser } from '../../dummy';
import UserItem from './user-item';
import { UserListWrapper } from './user-list.style';
const UserList = () => {
  const userList = DummyUser;
  return (
    <UserListWrapper>
      {userList.map((v, i) => (
        <UserItem key={i} nickname={v.nickname} imageUrl={v.isSleep ? nowSleep : nonSleep} isSleep={v.isSleep} />
      ))}
    </UserListWrapper>
  );
};

export default UserList;
