import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import ModalLayout from './modal-layout';
import { JoinWrapper } from './modal.style';
interface Props {
  show: boolean;
  close: () => void;
}
const JoinModal = ({ show, close }: Props) => {
  const [roomCode, setRoomCode] = useState('');
  const onChangeCode = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setRoomCode(e.target.value);
    },
    [roomCode]
  );
  
  return (
    <ModalLayout show={show} close={close}>
      <JoinWrapper>
        <h3>참여할 방의 코드를 입력해 주세요</h3>
        <input value={roomCode} onChange={onChangeCode} />
        <button>참여하기</button>
      </JoinWrapper>
    </ModalLayout>
  );
};

export default JoinModal;
