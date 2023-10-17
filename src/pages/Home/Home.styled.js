import styled from 'styled-components';
import hero_backgr from '../../assets/images/home_backgr@2x.webp';

export const HeroSectionStyled = styled.section`
  width: 100%;
  height: 100vh;
  background: top / cover no-repeat url(${hero_backgr});
  & .container {
    align-items: center;
    justify-content: center;
  }
  & p {
    margin: 10px 0 30px;
    width: 822px;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.33333;
    letter-spacing: -0.02em;
    text-align: center;
  }
`;

export const HeroBackgroundColor = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(23, 34, 52, 0.6);
`;
