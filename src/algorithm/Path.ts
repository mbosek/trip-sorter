import { filter, keysIn } from 'lodash';
import Priority from './Priority';
import { priceDiscount } from '../utils/price';
import { ICity } from '../actions';

export const INFINITY = 1 / 0;
export type INFINITY = typeof INFINITY;

export default class Path {
  distances: Object = {};
  previous: Object = {};
  nodes = new Priority();
  shortest: string;

  pathWithoutLastStop(path: Array<ICity>, finish: string): Array<ICity> {
    return filter(path, _ => _.departure !== finish);
  }

  updateNeighbours(alt: number, closer: string): void {
    this.distances[closer] = alt;
    this.previous[closer] = this.shortest;
    this.nodes.enqueue(alt, closer);
  }

  updatePriority(vertex: string, priority: number | INFINITY) {
    this.distances[vertex] = priority;
    return this.nodes.enqueue(priority, vertex);
  }

  checkKeys(vertices: ICity, start: string): void {
    keysIn(vertices).map(city => {
      city === start
        ? this.updatePriority(city, 0)
        : this.updatePriority(city, INFINITY);
      this.previous[city] = null;
      return true;
    });
  }

  checkDistance(distances: ICity, vertices: ICity, shortest: string): void {
    vertices[shortest].map((n: ICity, i: number) => {
      let alt = distances[shortest] + priceDiscount(n.cost, n.discount);
      if (alt < distances[n.arrival]) {
        this.updateNeighbours(alt, n.arrival);
      }
      return true;
    });
  }
}
