import styled from 'styled-components';

export const DealsItemStyled = styled.li`
  position: relative;
  width: calc(100% / 2 - 10px);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  & img {
    width: 100%;
    height: 400px;
    border-radius: 5px;
  }
`;

export const DealsItemInfoContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 0 10px 14px;
  border-radius: 0px 0px 5px 5px;
  /* opacity: 0.5; */

  & h3 {
    margin-bottom: 5px;
  }
`;

export const DealsItemInfo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  & li {
    width: calc(100% / 3);
    margin-bottom: 10px;
  }
`;
