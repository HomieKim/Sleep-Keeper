import React from 'react';
import { HeaderWrapper } from './layout.style';
import { ReactComponent as MoonIcons } from '../../asset/icons/moon.svg';

const Header = () => {
  return (
    <HeaderWrapper>
      <MoonIcons />
      <span>SLEEP KEEPER</span>
    </HeaderWrapper>
  )
}

export default Header;