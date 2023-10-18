import { useEffect, useState } from 'react';
import HeadContainer from '../HeadContainer/HeadContainer';
import { StyledSection } from './Deals.styled';
import { fetchData } from '../../api/fetchDeals';
import DealsItem from './DealsItem/DealsItem';

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
        <ul className="deals_list">
          {deals.map(item => (
            <DealsItem key={item.id} data={item} />
          ))}
        </ul>
      </HeadContainer>
    </StyledSection>
  );
};

export default Deals;
