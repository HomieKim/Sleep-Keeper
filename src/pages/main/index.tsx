import React from 'react';
import { MainWrapper } from './main.style';
import { ReactComponent as BackGroundIcon } from '../../asset/icons/back.svg';

const MainPage = () => {
  return (
    <MainWrapper>
      <h1>Sleep Keeper</h1>
      <section>
        <h3>NICK NAME</h3>
        <input maxLength={10} placeholder='최대 10글자 입력' />
        <button>SLEEP NOW</button>
      </section>
      <BackGroundIcon width={screen.width} />
    </MainWrapper>
  )
}

export default MainPage;