import * as React from 'react';
import { Action, ActionCreator } from 'redux';
import { Col, Row } from 'react-styled-flexboxgrid';
import { minToHHMM } from '../../utils/formatTime';
import {
  Wrapper,
  TotalTime,
  TotalCost,
  Button,
  FontAwesomeCustom
} from './styles';

export interface IProps {
  totalTime: number;
  totalCost: number;
  hide: ActionCreator<Action>;
}

const Summary = ({ totalTime, totalCost, hide }: IProps) => (
  <div>
    <Wrapper>
      <Row>
        <Col xs={2}>
          <p>Total:</p>
        </Col>
        <Col xs={5}>
          <TotalTime>
            <FontAwesomeCustom name="clock-o" />
            Time: {minToHHMM(totalTime)}
          </TotalTime>
        </Col>
        <Col xs={5}>
          <TotalCost>
            <FontAwesomeCustom name="euro" />
            Cost: {totalCost} EUR
          </TotalCost>
        </Col>
      </Row>
    </Wrapper>
    <Button type="button" onClick={hide}>
      Reset
    </Button>
  </div>
);

export default Summary;
