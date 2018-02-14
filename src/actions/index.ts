import * as fetch from 'isomorphic-fetch';
import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import GraphFactory from '../algorithm/GraphFactory';
import * as types from './types';
import { IState } from '../configureStore';

const API_URL = 'https://s3-eu-west-1.amazonaws.com/propertyfinder/response.json';

export interface IResults {
  cities: Array<ICity>;
  departure: string;
  arrival: string;
}

export interface IDuration {
  h: string;
  m: number;
}

export interface ICity {
  arrival: string;
  cost: number;
  departure: string;
  discount: number;
  duration: IDuration;
  reference: string;
  transport: string;
}

export interface IFastestPath {
  type: types.SHOW_FASTEST_RESULTS;
  payload: Array<ICity>;
}

export interface ICheapestPath {
  type: types.SHOW_CHEAPEST_RESULTS;
  payload: Array<ICity>;
}

export interface IHide {
  type: types.HIDE_RESULTS;
}

export interface IFetch {
  type: types.FETCH_DEALS;
  payload: Array<ICity>;
}

export type IPath = IFastestPath | ICheapestPath;

export const showFastestResults = ({
  cities,
  departure,
  arrival
}: IResults): IPath => {
  const graphFactory = new GraphFactory(cities);
  const fastestPath = graphFactory.createFastestPath();
  const path = fastestPath.generate(departure, arrival).reverse();

  return {
    type: types.SHOW_FASTEST_RESULTS,
    payload: path
  };
};

export const showCheapestResults = ({
  cities,
  departure,
  arrival
}: IResults): IPath => {
  const graphFactory = new GraphFactory(cities);
  const fastestPath = graphFactory.createCheapestPath();
  const path = fastestPath.generate(departure, arrival).reverse();

  return {
    type: types.SHOW_CHEAPEST_RESULTS,
    payload: path
  };
};

export const hideResults = (): IHide => ({ type: types.HIDE_RESULTS });

export const fetchDeals: ActionCreator<ThunkAction<Promise<Action>, IState, void>> = () => {
  return async (dispatch: Dispatch<IState>): Promise<Action> => {
    try {
      const request = await fetch(API_URL);
      const json = await request.json();
      const response = await json.deals;

      return dispatch({ type: types.FETCH_DEALS, payload: response });
    } catch (e) {
      return dispatch({ type: types.FETCH_DEALS, payload: [] });
    }
  };
};
