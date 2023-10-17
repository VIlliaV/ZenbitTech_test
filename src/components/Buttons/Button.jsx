import { ButtonStyle } from './Button.styled';

const Button = ({ className = '', typeButton = 'button', onClick, children }) => {
  return (
    <ButtonStyle type={typeButton} className={className} onClick={onClick}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
