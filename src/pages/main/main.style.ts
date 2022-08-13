import styled, { keyframes } from 'styled-components';

const SlideTop = keyframes`
  0% {
    transform: translateY(300px);
    opacity:0
  }
  100% {
    transform: translateY(0);
    opacity:1
  }
`

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  position:relative;
  overflow: hidden;
  display:flex;
  flex-direction:column;
  & h1 {
    font-weight: 400;
    size: 36px;
    padding-top: 50px;
  }
  & section {
    background:linear-gradient(180deg, #AA8DDA 0%, #1F3276 100%);
    flex:1;
    padding-top:30px;
    margin-top:20px;
    border-top-left-radius:20px;
    border-top-right-radius:20px;
    box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.1);
    animation: ${SlideTop} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    
    & h3 {
      font-weight:400;
      size:24px;
      margin-bottom:13px;
    }
    & input {
      display:block;
      margin:auto;
      width:210px;
      height:50px;
      background-color:var(--blue);
      border:none;
      border-radius:10px;
      font-size:18px;
      font-weight:bold;
      padding: 0px 8px;
      ::placeholder {
        color: #e9e9e9;
        font-weight:lighter;
        text-align:center;
      }
      z-index:10;
    }
    & button {
      margin-top:22px;
      padding:8px 36px;
      background-color:var(--green);
      font-weight:400;
      font-size:24px;
      color:white;
      border-radius:10px;
      z-index:10;
    }
  }
  
`;
