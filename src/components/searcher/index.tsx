import * as React from 'react';
import { Col } from 'react-styled-flexboxgrid';
import { Action } from 'redux';
import Form from '../form';
import Results from '../results';
import { Heading, RowFlex, ColFlex, Image } from './styles';
import * as logo from '../../logo.png';
import { IHide, IPath, IResults, ICity } from '../../actions';

export interface IPropsResults {
  cities: Array<ICity>;
  visible: boolean;
}

export interface IStateProps {
  deals: Array<ICity>;
  results: IPropsResults;
}

export interface IDispatchProps {
  fetchDeals: () => Promise<Action>;
  hideResults: () => IHide;
  showFastestResults: (results: IResults) => IPath;
  showCheapestResults: (results: IResults) => IPath;
}

export interface IProps extends IStateProps, IDispatchProps {}

class Searcher extends React.Component<IProps> {
  componentWillMount() {
    this.props.fetchDeals();
  }

  render() {
    const {
      hideResults,
      showFastestResults,
      showCheapestResults,
      deals,
      results: { visible, cities }
    } = this.props;

    return (
      <RowFlex>
        <ColFlex xs={12} sm={5} md={6} lg={6}>
          <div>
            <Image src={logo} alt="TripSorter" />
            <Heading>TripSorter</Heading>
            <Form
              showFastest={showFastestResults}
              showCheapest={showCheapestResults}
              deals={deals}
            />
          </div>
        </ColFlex>
        <Col xs={12} sm={7} md={6} lg={6}>
          {visible && <Results items={cities} hide={hideResults} />}
        </Col>
      </RowFlex>
    );
  }
}

export default Searcher;
