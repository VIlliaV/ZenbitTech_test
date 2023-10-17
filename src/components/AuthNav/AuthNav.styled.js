import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.ul`
  display: flex;
  gap: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  width: 160px;
  height: 44px;
  justify-content: center;
  align-items: center;
  color: var(--accent);
  background-color: var(--button);
  border: 1px solid var(--accent);
  border-radius: 5px;
  &.active {
    color: var(--primary);
    background-color: var(--accent);
  }
`;
