import React from 'react';
import { GroupItem, Wrapper } from './group.style';

const GropList = ({ data }: { data: Array<string> }) => {
  return (
    <Wrapper>
      {data.map((v, i) => (
        <GroupItem key={i}>{v}</GroupItem>
      ))}
    </Wrapper>
  );
};

export default GropList;
