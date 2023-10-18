import { useLocation } from 'react-router-dom';
import { HaveAccountStyled } from './HaveAccount.styled';

const HaveAccount = () => {
  const { pathname } = useLocation();
  const haveAccount = pathname === '/register' ? 'Sign In' : 'Sign Up';

  return (
    <HaveAccountStyled>
      Do{haveAccount === 'Sign Up' ? 'n’t' : ''} have account?
      <a href={pathname === '/register' ? '/login' : '/register'}> {haveAccount}</a>
    </HaveAccountStyled>
  );
};

export default HaveAccount;
