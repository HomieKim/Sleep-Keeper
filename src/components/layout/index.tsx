import React, { ReactNode } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Header from './header';
import { LayoutWrapper } from './layout.style';
interface Props {
  children: ReactNode;
}
const AppLayout = ({ children }: Props) => {
  const { pathname } = useLocation();

  return (
    <LayoutWrapper>
      {pathname !== '/' && <Header/>}
      <main style={{ height: '100%', paddingTop: pathname !== '/' ? '83px' : '0' }}>{children}</main>
      {pathname === 'room' && <div>팝업버튼</div>}
    </LayoutWrapper>
  );
};


/*
CSS-in-JS
scss -> css 전처리
*/
export default AppLayout;
