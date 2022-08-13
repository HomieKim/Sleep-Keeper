import React from 'react';
import ModalLayout from './modal-layout';
import { ExitWrapper } from './modal.style';
interface Props {
  show: boolean;
  close: () => void;
}
const ExitModal = ({ show, close }: Props) => {
  return (
    <ModalLayout  show={show} close={close}>
        <ExitWrapper>
          <h3>그룹을 나가시겠습니까?</h3>
          <section>
            <button style={{backgroundColor:'#E95733'}}>YES</button>
            <button style={{backgroundColor:'#E9E9E9'}} onClick={close}>NO</button>
          </section>
        </ExitWrapper>
    </ModalLayout>
  )
}

export default ExitModal;