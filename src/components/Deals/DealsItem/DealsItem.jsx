import { formatNumberWithSpaces } from '../../../utils/formating';
import { DealsItemInfo, DealsItemInfoContainer, DealsItemStyled } from './DealsItem.styled';

const DealsItem = ({ data }) => {
  const { img, name, dhs, ticket, yield_deal, days, sold } = data;
  return (
    <DealsItemStyled>
      <img src={img} alt={name} />
      <DealsItemInfoContainer>
        <h3>{name}</h3>
        <DealsItemInfo>
          <li>{formatNumberWithSpaces(dhs)} Dhs</li>
          <li>Yield {yield_deal}%</li>
          <li>Sold {sold}%</li>
          <li>Tiket - {formatNumberWithSpaces(ticket)} Dhs</li>
          <li>Days left {days}</li>
        </DealsItemInfo>
      </DealsItemInfoContainer>
    </DealsItemStyled>
  );
};

export default DealsItem;
