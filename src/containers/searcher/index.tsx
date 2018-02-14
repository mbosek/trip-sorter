import { connect, Dispatch } from 'react-redux';
import { Action } from 'redux';
import Searcher from '../../components/searcher';
import * as actions from '../../actions';

import { IPath, IResults, IHide } from '../../actions';
import { IState } from '../../configureStore';

function mapStateToProps(state: IState) {
  return {
    deals: state.deals,
    results: state.results
  };
}

function mapDispatchToProps(dispatch: Dispatch<IState>) {
  return {
    showFastestResults: (payload: IResults): IPath =>
      dispatch(actions.showFastestResults(payload)),
    showCheapestResults: (payload: IResults): IPath =>
      dispatch(actions.showCheapestResults(payload)),
    fetchDeals: (): Promise<Action> => dispatch(actions.fetchDeals()),
    hideResults: (): IHide => dispatch(actions.hideResults())
  };
}

const VisibleSearcher = connect(mapStateToProps, mapDispatchToProps)(Searcher);

export default VisibleSearcher;
