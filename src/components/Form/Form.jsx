import { FormStyled } from './Form.styled';

const Form = ({ onSubmit, children, id }) => {
  return (
    <FormStyled className="form" onSubmit={onSubmit} id={id}>
      {children}
    </FormStyled>
  );
};

export default Form;
