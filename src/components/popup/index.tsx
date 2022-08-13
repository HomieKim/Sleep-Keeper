import React, { Dispatch, SetStateAction } from 'react';
import { ImageWrapper, PopupWrapper } from './popup.style';
import people from '../../asset/images/people.png';
import plus from '../../asset/images/plus.png';
import { useNavigate } from 'react-router-dom';
interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const Popup = ({ setIsOpen }: Props) => {
  const navigate= useNavigate();
  return (
    <PopupWrapper>
      <section>
        <span>참가하기</span>
        <ImageWrapper onClick={() => setIsOpen(true)}>
          <img style={{ position: 'relative', bottom:0,top:0,right:0, left:0 }} src={people} />
        </ImageWrapper>
      </section>
      <section>
        <span>생성하기</span>
        <ImageWrapper onClick={()=>navigate('/room-create')}>
          <img style={{ position: 'relative' , bottom:0,top:0,right:0, left:0 }} src={plus} />
        </ImageWrapper>
      </section>
    </PopupWrapper>
  );
};

export default Popup;
