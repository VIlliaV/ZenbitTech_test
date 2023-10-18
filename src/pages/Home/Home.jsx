import Deals from '../../components/Deals/Deals';

import HeroSection from '../../components/HeroSection/HeroSection';
import { useAuth } from '../../utils/Hooks/useAuth';

const Home = () => {
  const { isLogin } = useAuth();
  return <>{!isLogin ? <HeroSection /> : <Deals />}</>;
};

export default Home;
