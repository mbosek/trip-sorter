import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Results from './index';
import Item from '../item';
import Summary from '../summary';

describe('<Results />', () => {

  let createComponent;
  let component;
  let props = {
    items: [{
      "transport": "train",
      "departure": "London",
      "arrival": "Amsterdam",
      "duration": {
        "h": "05",
        "m": "00"
      },
      "cost": 160,
      "discount": 0,
      "reference": "TLA0500"
    }, {
      "transport": "bus",
      "departure": "Amsterdam",
      "arrival": "Warsaw",
      "duration": {
        "h": "07",
        "m": "45"
      },
      "cost": 40,
      "discount": 25,
      "reference": "BLA0745"
    }],
    hide: () => {},
  }

  beforeEach(() => {
    createComponent = props => shallow(<Results {...props} />);
    component = createComponent(props);
  });

  it('renders two <Item /> component', () => {
    const element = component.find(Item);
    expect(element).to.have.length(2);
  });

  it('renders <Summary />', () => {
    const element = component.find(Summary);
    expect(element).to.have.length(1);
  });

});
