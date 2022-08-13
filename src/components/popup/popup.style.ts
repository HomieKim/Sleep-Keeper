import styled, { keyframes } from 'styled-components';
const SlideTop = keyframes`
  0% {
    transform: translateY(50px);
    opacity:0
  }
  100% {
    transform: translateY(0);
    opacity:1
  }
`
export const PopupWrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  position: fixed;
  right: 20px;
  bottom: 90px;
  animation: ${SlideTop} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  & section {
    display: flex;
    align-items: center;
    & span {
      font-weight: 400;
      font-size: 24px;
    }
  }
`;

export const ImageWrapper = styled.p`
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 12px;
  margin-left: 8px;
  background-color: #262c5f;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    position: relative;
    bottom: 0;
    top: 0;
    right: 0;
    width: 35px;
    height: 35px;
  }
`;
