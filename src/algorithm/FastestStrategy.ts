import { minBy } from 'lodash';

import Strategy from './Strategy';
import { getTimeFormat } from '../utils/formatTime';
import { ICity } from '../actions';

export default class FastestStrategy extends Strategy {
  createPath(vertices: Object, previous: Object, shortest: string): ICity | undefined {
    return minBy(
      this.quickestDistance(vertices[previous[shortest]], shortest),
      _ => getTimeFormat(_.duration.h, _.duration.m)
    );
  }
}
