import AuthNav from '../AuthNav/AuthNav';
import HeadContainer from '../HeadContainer/HeadConainer';
import Logo from '../Logo/Logo';
import { HeaderContainer } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <HeadContainer>
        <Logo />
        <AuthNav />
      </HeadContainer>
    </HeaderContainer>
  );
};

export default Header;
