import React, { ChangeEvent, useCallback, useState } from 'react';
import { MainWrapper } from './main.style';
import { ReactComponent as BackGroundIcon } from '../../asset/icons/back.svg';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate= useNavigate();
  const [nickname, setNickname] = useState('');
  const onChangeNickname = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setNickname(e.target.value);
    },
    [nickname]
  );
  const onClickHandler = useCallback(()=> {
    console.log('test');
    localStorage.setItem('nickname',nickname);
    navigate('/board')
  },[nickname])
  return (
    <MainWrapper>
      <h1>Sleep Keeper</h1>
      <section>
        <h3>NICK NAME</h3>
        <input value={nickname} onChange={onChangeNickname} maxLength={10} placeholder='최대 10글자 입력' />
        <button onClick={onClickHandler}>SLEEP NOW</button>
      </section>
    </MainWrapper>
  );
};

export default MainPage;
