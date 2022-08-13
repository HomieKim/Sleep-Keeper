import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 480px;
  background-color:#fff;
`
export const HeaderWrapper = styled.div`
  width:100%;
  font-weight:400;
  position:fixed;
  top:0;
  max-width:480px;
  height:83px;
  font-size:36px;
  display:flex;
  justify-content:center;
  align-items:center;
  background:var(--header);
  z-index:1000;
`