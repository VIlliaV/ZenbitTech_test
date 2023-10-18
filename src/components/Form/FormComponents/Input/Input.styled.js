import styled from 'styled-components';

export const InputStyled = styled.input`
  width: 100%;
  padding: 14px 20px 12px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 5px;
  border: 2px solid #e0e0e0;
  border-color: #e0e0e0;

  &:focus {
    outline: none;
  }
  &:hover {
    border-color: var(--accent);
  }
`;
