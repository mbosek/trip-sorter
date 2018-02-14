import {
  SHOW_FASTEST_RESULTS,
  SHOW_CHEAPEST_RESULTS,
  HIDE_RESULTS,
} from '../actions/types';
import { IHide, IPath } from '../actions';

const initialState = {
  visible: false,
  cities: []
};

export const results = (state = initialState, action: IPath | IHide) => {
  switch (action.type) {
    case SHOW_FASTEST_RESULTS:
      return {
        ...state,
        visible: true,
        cities: action.payload
      };
    case SHOW_CHEAPEST_RESULTS:
      return {
        ...state,
        visible: true,
        cities: action.payload
      };
    case HIDE_RESULTS:
      return {
        visible: false
      };
    default:
      return state;
  }
};
