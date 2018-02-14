import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from './App';
import VisibleSearcher from './containers/searcher';

describe('<App />', () => {
  it('renders one <VisibleSearcher /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(VisibleSearcher)).to.have.length(1);
  });
});
