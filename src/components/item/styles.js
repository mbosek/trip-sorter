import styled from 'styled-components';
import { Row } from 'react-styled-flexboxgrid';
import FontAwesome from 'react-fontawesome';

export const Wrapper = styled.div`
  background: #ecf0f1;
  padding: 20px;
  margin-bottom: 20px;
`;

export const SpaceRow = styled(Row)`
  margin-top: 5px;
`;

export const FontAwesomeCustom = styled(FontAwesome)`
  padding-right: 5px;
`;

export const FontAwesomeEuro = styled(FontAwesome)`
  font-size: 15px;
  padding-left: 2px;
`;

export const Departure = styled.span`
  padding-right: 25px;
`;

export const Arrival = styled.span`
  padding-left: 25px;
`;

export const Cost = styled.span`
  float: right;
`;

export const Transport = styled.span`
  padding-right: 10px;
  padding-left: 2px;
  font-size: 10px;
`;

export const Duration = styled.span`

`;

export const Reference = styled.span`
  padding-right: 25px;
`;
