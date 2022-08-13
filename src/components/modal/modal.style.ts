import styled, { keyframes } from 'styled-components';
const scale = keyframes`
  0% {
    transform: scaleY(0);
    opacity: 1;
  }
  100% {
    transform: scaleY(1);
    opacity: 1;
  }
`;
export const ModalWrapper = styled.div`
  position: fixed;
  z-index: 10005;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgba(81, 81, 81, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ModalInner = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 95%;
  max-width: 400px;
  min-height: 100px;
  border-radius: 8px;
  animation: ${scale} 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const JoinWrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  & h3 {
    font-weight: 400;
    font-size: 16px;
  }
  & input {
    display: block;
    height: 54px;
    width: 100%;
    margin: 22px 0px;
    background-color: #f0f0f0;
    border-radius: 10px;
    border: none;
    padding: 0px 12px;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
  }
  & button {
    padding: 12px 0px;
    width: 100%;
    text-align: center;
    border-radius: 30px;
    background-color: #d4caeb;
  }
`;

export const ExitWrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  & h3 {
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 30px;
  }
  & section {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    & button {
      color: white;
      width: 100%;
      padding: 12px 0px;
      border-radius: 10px;
    }
  }
`;
