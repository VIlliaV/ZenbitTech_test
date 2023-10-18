import { ButtonStyle } from './Button.styled';

const Button = ({ className = '', typeButton = 'button', onClick, children, form = undefined }) => {
  return (
    <ButtonStyle type={typeButton} className={className} onClick={onClick} form={form}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
