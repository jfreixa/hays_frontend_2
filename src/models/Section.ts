import { Task } from './Task';
export class Section {
  constructor (
    public id: number,
    public title: string,
    public tasks: Task[]
  ) { }
}