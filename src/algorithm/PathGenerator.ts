import Path from './Path';
import Priority from './Priority';
import { ICity } from '../actions';
import CheapestStrategy from './CheapestStrategy';
import FastestStrategy from './FastestStrategy';

export default class PathGenerator extends Path {
  nodes = new Priority();
  distances: any = {};
  previous: Object = {};
  shortest: string;
  INFINITY = 1 / 0;
  vertices: any = {};
  strategy: CheapestStrategy | FastestStrategy;

  constructor(cities: Object, strategy: CheapestStrategy | FastestStrategy) {
    super();
    this.vertices = cities;
    this.strategy = strategy;
  }

  generate(start: string, finish: string): Array<ICity> {
    const path: Array<any> = [];

    this.checkKeys(this.vertices, start);

    while (!this.nodes.isEmpty()) {
      this.shortest = this.nodes.dequeue();

      if (this.shortest === finish) {
        while (this.previous[this.shortest]) {
          let distance = this.strategy.createPath(
            this.vertices,
            this.previous,
            this.shortest
          );
          path.push(distance);
          
          this.shortest = this.previous[this.shortest];
        }
        break;
      }
      if (!this.shortest || this.distances[this.shortest] === this.INFINITY) {
        continue;
      }
      this.checkDistance(this.distances, this.vertices, this.shortest);
    }

    const generatedPath = this.pathWithoutLastStop(path, finish);
    return generatedPath;
  }
}
