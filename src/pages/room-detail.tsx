import React from 'react';
import styled from 'styled-components';
import UserList from '../components/user-list';

const RoomDetailPage = () => {
  return (
    <DetailWrapper>
      <h2>레이스 타이틀</h2>
      <UserList />
      <section>
        <button>참여하기</button>
      </section>
    </DetailWrapper>
  );
};
const DetailWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 0px 20px 20px 20px;
  & h2 {
    padding: 24px 0px;
    text-align: center;
  }
  & section {
    text-align:center;
    position: fixed;
    bottom: 20px;
    left:0;
    width:100%;
    display:flex;
    justify-content:center;
    & button {
      width:calc(100vw - 40px);
      margin: auto;
      padding :16px 0px;
      background-color:#D4CAEB;
      color:#101010;
      border-radius:20px;
    }
  }
`;
export default RoomDetailPage;
