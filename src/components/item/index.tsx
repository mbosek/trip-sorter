import * as React from 'react';
import * as FontAwesome from 'react-fontawesome';
import { Col, Row } from 'react-styled-flexboxgrid';
import { priceDiscount } from '../../utils/price';
import { ICity } from '../../actions';

import {
  Wrapper,
  SpaceRow,
  FontAwesomeCustom,
  FontAwesomeEuro,
  Departure,
  Arrival,
  Cost,
  Transport,
  Reference,
  Duration
} from './styles';

export interface IProps {
  item: ICity;
}

const Item = ({
  item: { departure, arrival, cost, transport, reference, discount, duration }
}: IProps) => (
  <Wrapper>
    <Row>
      <Col xs={12} sm={9} md={9} lg={9}>
        <Departure>{departure}</Departure>
        <FontAwesome name="arrow-circle-right" />
        <Arrival>{arrival}</Arrival>
      </Col>
      <Col xs={12} sm={3} md={3} lg={3}>
        <Cost>
          {priceDiscount(cost, discount)}
          <FontAwesomeEuro name="euro" />
        </Cost>
      </Col>
    </Row>
    <SpaceRow>
      <Col xs={12}>
        <FontAwesome name={transport} />
        <Transport>{transport}</Transport>
        <Reference>{reference}</Reference>
        <Duration>
          <FontAwesomeCustom name="clock-o" />
          {duration.h}h{duration.m}
        </Duration>
      </Col>
    </SpaceRow>
  </Wrapper>
);

export default Item;
