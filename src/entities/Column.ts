import { makeObservable, observable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

import { IColumn } from '../models/ColumnInterface';
import { Todo } from './Todo';

export class Column implements IColumn {
  id: string;
  @observable name: string;
  @observable todos: Todo[] = [];

  constructor(name: string, todos: Todo[] = []) {
    makeObservable(this);

    this.id = uuidv4();
    this.name = name;
    this.todos = todos;
  }
}
