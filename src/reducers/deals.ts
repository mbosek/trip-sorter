import { FETCH_DEALS } from '../actions/types';
import { IFetch } from '../actions';

export const deals = (state = [], action: IFetch) => {
  switch (action.type) {
    case FETCH_DEALS:
      return action.payload;
    default:
      return state;
  }
};
