import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import GropList from '../components/group-list';
import popup from '../asset/images/popup.png';
import Popup from '../components/popup';
import JoinModal from '../components/modal';
import MyGroup from '../components/my-group';

const RoomPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const myNickname = localStorage.getItem('nickname');
  /*nickname으로 user가 속한 그룹의 data 가져옴 */
  const isParticipate = false;
  const onClickPopup = useCallback(() => {
    setShowPopup(prev => !prev);
  }, [showPopup]);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <RoomWrapper>
      <div>{myNickname}</div>
      {isParticipate ? (
        <MyGroup />
      ) : (
        <GropList data={['방제목1', '방제목1', '방제목1', '방제목1', '방제목1', '방제목1', '방제목2', '방제목3']} />
      )}
      {!isParticipate && <img style={{position:'fixed'}}src={popup} alt='popup' onClick={onClickPopup} />}
      {showPopup && <Popup setIsOpen={setIsOpen} />}
      <JoinModal show={isOpen} close={onClose} />
    </RoomWrapper>
  );
};

const RoomWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  position: relative;
  & img {
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
  }
`;

export default RoomPage;
