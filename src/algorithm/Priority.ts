import { INFINITY } from './Path';

export interface INode {
  priority: number | INFINITY;
  key: string;
}

export default class Priority {
  nodes: Array<INode | any> = [];

  enqueue = (priority: number | INFINITY, key: string) => {
    this.nodes.push({ key, priority });
    this.sort();
  }

  dequeue = (): string => this.nodes.shift().key;

  sort = (): void => {
    this.nodes.sort((a, b) => a.priority - b.priority);
  }

  isEmpty = (): boolean => !this.nodes.length;
}
