import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Item from '../item';
import {
  Departure,
  Arrival,
  Cost,
  Transport,
  Reference,
  Duration,
} from './styles';

describe('<Item />', () => {

  let createComponent;
  let component;
  let props = { item : {
    departure: 'London',
    arrival: 'Warsaw',
    cost: 30,
    transport: 'bus',
    reference: '#123',
    duration: '12h40',
  }};

  beforeEach(() => {
    createComponent = props => shallow(<Item {...props} />);
    component = createComponent(props);
  });

  it('renders <Departure /> component', () => {
    const element = component.find(Departure);
    expect(element).to.have.length(1);
  });

  it('checks results Departure text', () => {
    const name = component.find(Departure);
    expect(name.children().text()).equal('London');
  });

  it('checks results TotalTime text', () => {
    const name = component.find(Arrival);
    expect(name.children().text()).equal('Warsaw');
  });

});
