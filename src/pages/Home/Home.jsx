import Button from '../../components/Buttons/Button';
import Deals from '../../components/Deals/Deals';
import HeadContainer from '../../components/HeadContainer/HeadConainer';
import { scrollToElementById } from '../../utils/smoothScroll';
import { HeroBackgroundColor, HeroSectionStyled } from './Home.styled';

const Home = () => {
  return (
    <>
      <HeroSectionStyled>
        <HeroBackgroundColor>
          <HeadContainer>
            <h1>The chemical negatively charged</h1>
            <p>
              Numerous calculations predict, and experiments confirm, that the force field reflects the beam, while the
              mass defect is not formed. The chemical compound is negatively charged. Twhile the mass defect is{' '}
            </p>
            <Button className="hero_button" onClick={() => scrollToElementById('Deals')}>
              Get Started
            </Button>
          </HeadContainer>
        </HeroBackgroundColor>
      </HeroSectionStyled>
      <Deals />
    </>
  );
};

export default Home;
