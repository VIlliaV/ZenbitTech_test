import { useState } from 'react';
import { InputStyled } from './Input.styled';

const Input = ({
  typeInput = 'text',
  nameInput = typeInput,
  placeholderInput = typeInput,
  requiredInput = false,
  title = false,
}) => {
  console.log('🚀 ~ title:', title);
  const [inputValue, setInputValue] = useState('');
  const handleChange = event => {
    const value = event.target.value;
    setInputValue(value);
  };

  return (
    <>
      <InputStyled
        type={typeInput}
        name={nameInput}
        placeholder={placeholderInput}
        required={requiredInput}
        value={inputValue}
        onChange={handleChange}
        aria-label={nameInput}
      />
      {nameInput === 'password' && title === 'Login' && (
        <a
          className="forgot_password"
          href="/"
          aria-label="Forgot password?"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Forgot password?
        </a>
      )}
    </>
  );
};

export default Input;
