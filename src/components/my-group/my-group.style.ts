import styled from 'styled-components';
export const MyGroupWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
export const InfoSection = styled.section`
  & div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    & img {
      position: relative;
      bottom: 0;
      top: 0;
      left: 0;
      right: 0;
      width: 30px;
      height: 30px;
    }
    & p {
      padding: 8px 12px;
      color: white;
      background-color: #686868;
      border-radius: 10px;
    }
  }
`;

export const SleepButton = styled.div`
  position: fixed;
  width: 100%;
  text-align: center;
  bottom: 20px;
`;
