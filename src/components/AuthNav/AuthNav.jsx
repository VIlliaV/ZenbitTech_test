import { Container, StyledNavLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Container>
      <li>
        <StyledNavLink to="/">Log In</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/login">Sign Up</StyledNavLink>
      </li>
    </Container>
  );
};

export default AuthNav;
