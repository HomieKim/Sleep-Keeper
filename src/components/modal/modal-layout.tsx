import React, { ReactNode, SyntheticEvent } from "react";
import { Background, ModalInner, ModalWrapper } from './modal.style';
import { ModalPotal } from './portal';

interface Props {
  children: ReactNode;
  show: boolean;
  close: () => void;
}
const ModalLayout = ({ children, show, close }: Props) => {
  const onClose = (e: SyntheticEvent) => {
    e.stopPropagation();
    if (!((e.target as HTMLElement).id === "inner")) {
      close();
    }
  };
  return show ? (
    <ModalPotal>
      <ModalWrapper onClick={onClose} >
        <Background >
        <ModalInner onClick={(e:SyntheticEvent)=> e.stopPropagation()} id="inner">
          {children}
        </ModalInner>
        </Background>
      </ModalWrapper>
    </ModalPotal>
  ) : null;
};

export default ModalLayout;