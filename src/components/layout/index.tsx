import React, { ReactNode } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { LayoutWrapper } from './layout.style';
interface Props {
  children: ReactNode;
}
const AppLayout = ({ children }: Props) => {
  const {pathname} = useLocation();
  
  return (
    <LayoutWrapper>
      {pathname !== '/' && <div>헤더</div> }
      <main style={{paddingTop: pathname !== '/' ? '83px' : ''}}>{children}</main>
      {pathname === 'room' && <div>팝업버튼</div>}
    </LayoutWrapper>
  );
};

export default AppLayout;
