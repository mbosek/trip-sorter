import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';

export const Heading = styled.h3`
  text-align: center;
`;

export const Image = styled.img`
  margin: 0 auto 50px;
  display: block;
`;

export const ColFlex = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RowFlex = styled(Row)`
  height: 100%;
`;
