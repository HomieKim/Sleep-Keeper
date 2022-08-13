import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  position:relative;
  overflow: hidden;
  & h1 {
    font-weight: 400;
    size: 36px;
    padding-top: 50px;
  }
  & section {
    padding-top:110px;
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
    }
    & button {
      margin-top:22px;
      padding:8px 36px;
      background-color:var(--green);
      font-weight:400;
      font-size:24px;
      color:white;
      border-radius:10px;
    }
  }
  & svg {
      position:absolute;
      left:0;
      bottom:0;
      transform:translateY(40px);
      max-width:480px;
    }
`;
