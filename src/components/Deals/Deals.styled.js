import styled from 'styled-components';

export const StyledSection = styled.section`
  width: 100%;
  /* height: 100vh; */
  /* background-color: grey; */
  margin-bottom: 12px;
  & h2 {
    margin: 50px 0 20px;
  }
  & ul {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    & li {
      width: calc(100% / 2 - 10px);
      & img {
        width: 100%;
        height: 400px;
      }
    }
  }
`;
