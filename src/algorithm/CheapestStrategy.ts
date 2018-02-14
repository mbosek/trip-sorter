import { minBy } from 'lodash';
import Strategy from './Strategy';
import { ICity } from '../actions';

export default class CheapestStrategy extends Strategy {
  createPath(vertices: Object, previous: Object, shortest: string): ICity | undefined {
    return minBy(
      this.quickestDistance(vertices[previous[shortest]], shortest),
      _ => _.cost
    );
  }
}
