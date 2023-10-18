import { Container, StyledNavLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Container>
      <li>
        <StyledNavLink to="/login">Log In</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/register">Sign Up</StyledNavLink>
      </li>
    </Container>
  );
};

export default AuthNav;
