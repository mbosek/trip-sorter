import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, formValueSelector, InjectedFormProps } from 'redux-form';
import { groupBy } from 'lodash';
import { Wrapper, Button } from './styles';
import Select from './select';
import { IPath, ICity } from '../../actions';
import { IState } from '../../configureStore';

export interface IStateProps {
  deals: Array<ICity>;
  departure: string;
  arrival: string;
}

export interface IDispatchProps {
  showFastest: (preferences: Object) => IPath;
  showCheapest: (preferences: Object) => IPath;
}

export interface IProps extends IStateProps, IDispatchProps {}

function mapStateToProps(state: IState) {
  const selector = formValueSelector('tripSorterForm');
  const departure = selector(state, 'departure');
  const arrival = selector(state, 'arrival');
  return {
    departure,
    arrival
  };
}

export class Form extends React.Component<IProps & InjectedFormProps<{}, IProps>> {
  render() {
    const { showFastest, showCheapest, deals, departure, arrival } = this.props;
    const groupDealsByDeparture = groupBy(deals, 'departure');
    const preferences = {
      departure,
      arrival,
      cities: groupDealsByDeparture
    };

    const showFastestPath = () => showFastest(preferences);
    const showCheapestPath = () => showCheapest(preferences);
    const cities = Object.keys(groupDealsByDeparture);

    return (
      <form>
        <div>
          <label>From</label>
          <Select name="departure" cities={cities} filter={arrival} />
        </div>

        <div>
          <label>To</label>
          <Select name="arrival" cities={cities} filter={departure} />
        </div>

        <Wrapper>
          <Button
            type="button"
            disabled={!arrival || !departure}
            onClick={showCheapestPath}
          >
            Cheapest
          </Button>
          <Button
            type="button"
            disabled={!arrival || !departure}
            onClick={showFastestPath}
          >
            Fastest
          </Button>
        </Wrapper>
      </form>
    );
  }
}

export default compose(
  reduxForm<{}, any>({
    form: 'tripSorterForm'
  }),
  connect(mapStateToProps)
)(Form);
