import styled from 'styled-components';
import { size, padding } from '@/styles/media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: ${size.desktop}px;
  height: 100%;
  padding: 0 ${padding.desktop}px;
`;
