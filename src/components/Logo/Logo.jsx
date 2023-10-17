import { LogoLink, LogoStyled } from './Logo.styled';

const Logo = () => {
  return (
    <LogoLink
      href="https://zenbit.tech/"
      aria-label="official website zenbit.tech"
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      <LogoStyled />
    </LogoLink>
  );
};

export default Logo;
