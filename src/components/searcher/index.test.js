import React from 'react';
import sinon  from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Searcher from './index';
import Form from '../form';
import Results from '../results';
import { Heading, Image } from './styles';
import { fetchDeals } from '../../actions'

describe('<Searcher />', () => {

  let createComponent;
  let component;
  let props = {
    fetchDeals: sinon.spy(fetchDeals),
    hide: () => {},
    show: () => {},
    deals: [],
    results : {
      visible: true,
      cities: [],
    }
  }

  beforeEach(() => {
    createComponent = props => shallow(<Searcher {...props} />);
    component = createComponent(props);
  });

  it('checks name text', () => {
    const name = component.find(Heading);
    expect(name.children().text()).equal('TripSorter');
  });

  it('renders one <Heading /> component', () => {
    const element = component.find(Heading);
    expect(element).to.have.length(1);
  });

  it('renders one <Image /> component', () => {
    const element = component.find(Image);
    expect(element).to.have.length(1);
  });

  it('renders one <Form /> component', () => {
    const element = component.find(Form);
    expect(element).to.have.length(1);
  });

  it('renders one <Results /> component', () => {
    const element = component.find(Results);
    expect(element).to.have.length(1);
  });

  it('no render <Results /> component', () => {
    const modifiedProps = Object.assign(props, { results : {
      visible: false,
      cities: [],
    } });
    component = createComponent(modifiedProps);
    const element = component.find(Results);
    expect(element).to.have.length(0);
  });
});
