import React, { useCallback, useState } from 'react';
import { InfoSection, MyGroupWrapper, SleepButton } from './my-group.style';
import exit from '../../asset/images/exit.png';
import ExitModal from '../modal/exit-modal';
import wakeup from '../../asset/images/wakeup.png';
import sleep from '../../asset/images/sleep.png';
import UserList from '../user-list';
const MyGroup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSleep, setIsSleep] = useState(false);
  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);
  const onClickSleepButton = useCallback(()=>{
    setIsSleep((prev) => !prev);
  },[isSleep]);
  return (
    <MyGroupWrapper>
      <InfoSection>
        <div>
          <span>My Group</span>
          <img src={exit} onClick={()=> setIsOpen(true)}/>
        </div>
        <div>
          <span>invite Code</span>
          <p>1234</p>
        </div>
      </InfoSection>
      <UserList />
      <ExitModal show={isOpen} close={onClose} />
      <SleepButton onClick={onClickSleepButton}>
        <img style={{position:'relative', bottom:0, top:0, left:0, right:0}} src={!isSleep ? sleep : wakeup} />
      </SleepButton>
    </MyGroupWrapper>
  )
}

export default MyGroup;