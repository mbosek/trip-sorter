import { filter } from 'lodash';
import { ICity } from '../actions';

export default class Strategy {
  quickestDistance(previous: Array<ICity>, shorter: string) {
    return filter(previous, _ => _.arrival === shorter);
  }
}
