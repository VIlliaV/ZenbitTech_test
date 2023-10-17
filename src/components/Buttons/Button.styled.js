import styled from 'styled-components';

export const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 11px 0px;
  color: var(--primary);
  font-family: var(--font-title);
  font-size: var(--font-size_button);
  font-weight: 700;
  line-height: 1.375;
  white-space: nowrap;
  border: none;
  border: 1px solid var(--accent);
  border-radius: 5px;
  background-color: var(--accent);
  box-shadow: 0px 0px 0px var(--secondary);
  cursor: pointer;
  transition: box-shadow 250ms var(--cubic-bezier), background-color 250ms var(--cubic-bezier);

  &:hover,
  &:focus {
    background-color: var(--accent);
    box-shadow: 0px 4px 8px var(--secondary);
  }
`;
