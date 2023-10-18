import { LabelContainer, LabelStyled } from './Label.styled';
import Input from '../Input/Input';

const Label = props => {
  const { typeInput, nameInput = typeInput } = props;
  return (
    <LabelContainer>
      <LabelStyled>{nameInput}</LabelStyled>
      <Input {...props} />
    </LabelContainer>
  );
};

export default Label;
