import { DealItemStyled } from './DealItem.styled';

const DealsItem = ({ data }) => {
  const { img, name, dhs, ticket, yield_deal, days, sold } = data;
  return (
    <DealItemStyled>
      <img src={img} alt={name} />
      yield
    </DealItemStyled>
  );
};

export default DealsItem;
