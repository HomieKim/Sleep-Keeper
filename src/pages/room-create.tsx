import React from 'react';
import styled from 'styled-components';
const RoomCreatePage = () => {
  return (
    <RoomCreateWrapper>
      <h3>
        생성할 방 이름을 작성해주세요.
      </h3>
      <section>
        <input maxLength={10} />
      </section>
      <button>
        생성하기
      </button>
    </RoomCreateWrapper>
  )
}
const RoomCreateWrapper = styled.div`
width: 100%;
height: 100%;
text-align: center;
position:relative;

& h3 {
    font-weight:400;
    size:24px;
    margin-bottom:13px;
}
& section {
    & input {
        display:block;
        margin:auto;
        width:378px;
        height:50px;
        border:none;
        border-bottom:1px solid black;
        font-size:18px;
        font-weight:bold;
        padding: 0px 8px;
    }
}
& button {
    margin-top:22px;
    padding:8px 36px;
    background-color:var(--pistachio);
    font-weight:400;
    font-size:24px;
    color:black;
    border-radius:98px;
}

`;

export default RoomCreatePage;