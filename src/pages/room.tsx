import React from 'react';

const RoomPage = () => {
  const myNickname = localStorage.getItem('nickname');
  /*nickname으로 user가 속한 그룹의 data 가져옴 */
  const isGroup = false;
  return(
   <div>
    {
      isGroup ? <div>sdf</div> : <div>sdf</div>
    }
   </div>
  )
}

export default RoomPage;