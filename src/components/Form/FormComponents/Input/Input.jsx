import { useState } from 'react';
import { InputStyled } from './Input.styled';

const Input = ({ typeInput = 'text', nameInput = typeInput, placeholderInput = typeInput, requiredInput = false }) => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = event => {
    const value = event.target.value;
    setInputValue(value);
  };

  return (
    <InputStyled
      type={typeInput}
      name={nameInput}
      placeholder={placeholderInput}
      required={requiredInput}
      value={inputValue}
      onChange={handleChange}
      aria-label={nameInput}
    />
  );
};

export default Input;
