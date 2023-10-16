import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: var(--font-body);
    font-size: var(--font-size_body);
    font-style: normal;
    font-weight: 700;
    line-height:  1.22222;

  }
  h1, h2, h3 {
    font-family: var(--font-title);
    font-style: normal;
    font-weight: 700;
  }
  h1 {
    font-size: 64px; 
    line-height: 1.25;
    text-align: center;
  }

  h2 {
    font-size: var(--font-size_title);
    line-height: 1.21429;
   
  }
  h3 {
    font-size: var(--font-size_subtitle);
    line-height: 1.7;   
  }

  input {
    font-size: var(--font-size_input);
    font-weight: 400;
    line-height: 1.57143; 
    color: var(--secondary);
       &::placeholder {
       opacity: 0.5;
       }
  }

 
`;
