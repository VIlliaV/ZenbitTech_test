import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 80px;
  background-color: var(--secondary);
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.06), 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  & .container {
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
