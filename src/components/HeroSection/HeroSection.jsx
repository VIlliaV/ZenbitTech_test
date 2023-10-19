import { useNavigate } from 'react-router-dom';
import Button from '../Buttons/Button';
import HeadContainer from '../HeadContainer/HeadContainer';
import { HeroBackgroundColor, HeroSectionStyled } from './HeroSection.styled';

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <HeroSectionStyled>
      <HeroBackgroundColor>
        <HeadContainer>
          <h1>The chemical negatively charged</h1>
          <p>
            Numerous calculations predict, and experiments confirm, that the force field reflects the beam, while the
            mass defect is not formed. The chemical compound is negatively charged. Twhile the mass defect is{' '}
          </p>
          <Button className="hero_button" onClick={() => navigate('/login')}>
            Get Started
          </Button>
        </HeadContainer>
      </HeroBackgroundColor>
    </HeroSectionStyled>
  );
};

export default HeroSection;
