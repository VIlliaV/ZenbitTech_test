import styled from 'styled-components';
import auth_backgr from '../../assets/images/Auth_backgr.webp';
import auth_backgr2x from '../../assets/images/Auth_backgr@2x.webp';
import { media } from '../../styles/media';

export const StyledSection = styled.section`
  width: 100%;
  display: flex;
`;

export const AuthBackground = styled.div`
  flex: 1;
  width: 100%;
  height: 100vh;
  background: center/ cover no-repeat url(${auth_backgr});
  @media ${media.retina} {
    background-image: url(${auth_backgr2x});
  }
`;

export const AuthPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 550px;
  & h2 {
    margin-bottom: 20px;
    color: var(--secondary);
  }
  & .form_container {
    width: 350px;
    color: var(--secondary);
    & .form {
      margin-bottom: 30px;
    }
    & .form_button {
      width: 100%;
    }
  }
`;
