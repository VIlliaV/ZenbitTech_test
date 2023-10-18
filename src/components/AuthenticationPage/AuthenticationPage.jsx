import { useLocation, useNavigate } from 'react-router-dom';
import { AuthBackground, AuthPanel, StyledSection } from './AuthenticationPage.styled';
import Form from '../Form/Form';
import Label from '../Form/FormComponents/Label/Label';
import Button from '../Buttons/Button';
import HaveAccount from './HaveAccount/HaveAccount';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { TYPE_INPUT } from '../../constants/constants';
import { validateData } from '../../utils/validation';
import { useDispatch } from 'react-redux';
import { login, signUp } from '../../redux/auth/authOperations';
import { useAuth } from '../../utils/Hooks/useAuth';

const AuthenticationPage = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const { isLogin, loginError } = useAuth();
  const title = pathname === '/login' ? 'Login' : 'Sign Up';
  const buttonName = pathname === '/login' ? 'Sign In' : 'Sign Up';
  const { email, password } = TYPE_INPUT;

  isLogin && navigate('/');

  useEffect(() => {
    loginError && toast.error(loginError);
  }, [loginError]);

  const handleSubmit = event => {
    event.preventDefault();
    const { error } = validateData(userData);
    error && toast.error(error.message);
    if (!error) {
      setUserData({});
      pathname === '/login' ? dispatch(login(userData)) : dispatch(signUp(userData));
    }
  };

  const takeDataFromLabel = (name, value) => {
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <StyledSection>
      <AuthBackground />
      <AuthPanel>
        <div className="form_container">
          <h2>{title}</h2>
          <Form onSubmit={handleSubmit} id={title}>
            <Label typeInput={email} setUserData={takeDataFromLabel} userInfo={userData} />
            <Label typeInput={password} title={title} setUserData={takeDataFromLabel} userInfo={userData} />
          </Form>
          <Button className="form_button" typeButton="submit" form={title}>
            {buttonName}
          </Button>
          <HaveAccount />
        </div>
      </AuthPanel>
    </StyledSection>
  );
};

export default AuthenticationPage;
