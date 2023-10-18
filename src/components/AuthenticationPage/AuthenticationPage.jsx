import { useLocation } from 'react-router-dom';
import { AuthBackground, AuthPanel, StyledSection } from './AuthenticationPage.styled';
import Form from '../Form/Form';
import Label from '../Form/FormComponents/Label/Label';
import Button from '../Buttons/Button';
import HaveAccount from './HaveAccount/HaveAccount';

const AuthenticationPage = () => {
  const { pathname } = useLocation();
  const title = pathname === '/login' ? 'Login' : 'Sign Up';
  const buttonName = pathname === '/login' ? 'Sign In' : 'Sign Up';

  return (
    <StyledSection>
      <AuthBackground />
      <AuthPanel>
        <div className="form_container">
          <h2>{title}</h2>
          <Form>
            <Label typeInput="email" />
            <Label typeInput="password" title={title} />
          </Form>
          <Button className="form_button">{buttonName}</Button>
          <HaveAccount />
        </div>
      </AuthPanel>
    </StyledSection>
  );
};

export default AuthenticationPage;
