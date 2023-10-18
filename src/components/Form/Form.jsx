import { FormStyled } from './Form.styled';

const Form = ({ onSubmit, children }) => {
  return (
    <FormStyled className="form" onSubmit={onSubmit}>
      {children}
    </FormStyled>
  );
};

export default Form;
