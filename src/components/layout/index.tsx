import React, { ReactNode } from 'react';
import { LayoutWrapper } from './layout.style';
interface Props {
  children: ReactNode;
}
const AppLayout = ({ children }: Props) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default AppLayout;
