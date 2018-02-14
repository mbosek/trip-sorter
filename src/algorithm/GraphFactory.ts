import PathGenerator from './PathGenerator';
import FastestStrategy from './FastestStrategy';
import CheapestStrategy from './CheapestStrategy';

export default class GraphFactory {
  cities: Object;
  
  constructor(cities: Object) {
    this.cities = cities;
  }

  createFastestPath(): PathGenerator {
    return new PathGenerator(this.cities, new FastestStrategy());
  }

  createCheapestPath(): PathGenerator {
    return new PathGenerator(this.cities, new CheapestStrategy());
  }
}
