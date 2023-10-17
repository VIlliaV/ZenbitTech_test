import { useEffect, useState } from 'react';
import HeadContainer from '../HeadContainer/HeadContainer';
import { StyledSection } from './Deals.styled';
import { fetchData } from '../../api/fetchDeals';

const Deals = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const data = await fetchData();
        setDeals(data);
      } catch (error) {
        // toast.error(error.message);
      }
    };

    fetchDeals();
  }, []);

  return (
    <StyledSection id="Deals">
      <HeadContainer>
        <h2>Open Deals</h2>
        <ul>
          {deals.map(deal => (
            <li key={deal.id}>
              <img src={deal.img} alt={deal.name} />
            </li>
          ))}
        </ul>
      </HeadContainer>
    </StyledSection>
  );
};

export default Deals;
