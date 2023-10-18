import { useDispatch } from 'react-redux';
import { useAuth } from '../../utils/Hooks/useAuth';
import { Container, StyledNavLink } from './AuthNav.styled';
import { logOut } from '../../redux/auth/authOperations';

const AuthNav = () => {
  const dispatch = useDispatch();
  const { isLogin } = useAuth();

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <Container>
      {!isLogin ? (
        <>
          <li>
            <StyledNavLink to="/login">Log In</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/register">Sign Up</StyledNavLink>
          </li>
        </>
      ) : (
        <li>
          <StyledNavLink to="/" onClick={handleLogOut}>
            Log Out
          </StyledNavLink>
        </li>
      )}
    </Container>
  );
};

export default AuthNav;
