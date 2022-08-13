import styled from 'styled-components';

export const UserListWrapper = styled.div`
  display: grid;
  gap:16px;
  grid-template-columns:1fr 1fr 1fr;
`;
export const UserItemWrapper = styled.div<{ isActive: boolean }>`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-radius: 8px;
  justify-content:center;
  align-items:center;
  background-color: ${props => (props.isActive ? 'var(--beige)' : 'var(--grey)')};
  & img {
    width: 60px;
    height: 60px;
  }
  & span {
    font-weight: 400;
    font-size: 20px;
  }
`;
