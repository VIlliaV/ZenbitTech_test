import styled from 'styled-components';
import auth_backgr from '../../assets/images/Auth_backgr.webp';

export const StyledSection = styled.section`
  width: 100%;
  display: flex;
`;

export const AuthBackground = styled.div`
  width: 100%;
  height: 100vh;
  background: center/ cover no-repeat url(${auth_backgr});
`;

export const AuthPanel = styled.div`
  width: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
