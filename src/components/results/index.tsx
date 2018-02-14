import * as React from 'react';
import { Action, ActionCreator } from 'redux';
import Item from '../item';
import Summary from '../summary';
import { Wrapper, SubWrapper } from './styles';
import { getTimeFormat } from '../../utils/formatTime';
import { priceDiscount } from '../../utils/price';
import { ICity } from '../../actions';

export interface IProps {
  items: Array<ICity>;
  hide: ActionCreator<Action>;
}

const Results = ({ items = [], hide }: IProps) => {
  const totalCost = items
    .map(item => priceDiscount(item.cost, item.discount))
    .reduce((a, b) => a + b);

  const totalTime = items
    .map(item => getTimeFormat(item.duration.h, item.duration.m))
    .reduce((a, b) => a + b);

  return (
    <Wrapper>
      <SubWrapper>
        {items.map(item => <Item key={item.reference} item={item} />)}
        <Summary totalTime={totalTime} totalCost={totalCost} hide={hide} />
      </SubWrapper>
    </Wrapper>
  );
};

export default Results;
