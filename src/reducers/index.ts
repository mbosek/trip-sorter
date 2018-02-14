import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { HIDE_RESULTS } from '../actions/types';
import { IHide } from '../actions';
import { IState } from '../configureStore';
import { deals } from './deals';
import { results } from './results';

const reducers = combineReducers({
  deals,
  results,
  form: formReducer.plugin({
    tripSorterForm: (state: IState, action: IHide) => {
      switch (action.type) {
        case HIDE_RESULTS:
          return undefined;
        default:
          return state;
      }
    }
  })
});

export default reducers;
