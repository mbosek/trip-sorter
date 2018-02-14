import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { ICity } from './actions';
import { IPropsResults } from './components/searcher';

export interface IState {
  deals: Array<ICity>;
  form: Object;
  results: IPropsResults;
}

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk));
}
