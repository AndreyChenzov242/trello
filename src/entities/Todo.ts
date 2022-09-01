import { makeObservable, observable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

import { ITodo } from '../models/TodoInterface';

export class Todo implements ITodo {
  id: string;
  @observable text: string;

  constructor(text: string) {
    makeObservable(this);

    this.id = uuidv4();
    this.text = text;
  }
}
