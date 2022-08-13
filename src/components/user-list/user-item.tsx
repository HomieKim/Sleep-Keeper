import React from 'react';
import { UserItemWrapper } from './user-list.style';
interface Props {
  nickname:string;
  imageUrl:string;
  isSleep:boolean;
}
const UserItem = ({nickname, imageUrl,isSleep}:Props) => {
  return (
    <UserItemWrapper isActive={isSleep}>
      <img style={{position:'relative', bottom:0, top:0, left:0, right:0}} src={imageUrl} alt='isSleep' />
      <span>{nickname}</span>
    </UserItemWrapper>
  )
}

export default UserItem;