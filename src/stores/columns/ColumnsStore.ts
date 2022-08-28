import { action, autorun, makeObservable, observable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';
import { columns } from '../../mocks/columns';
import { ColumnID, IColumn } from '../../services/column/ColumnInterface';
import { ITodo } from '../../services/todo/TodoInterface';

export class ColumnsStore {
  @observable columns: IColumn[] = [];

  constructor() {
    makeObservable(this);

    this.columns = observable([new Column('first'), new Column('second')]);
  }

  @action.bound
  addTodo(columnID: ColumnID, todo: ITodo) {
    const index = this.columns.findIndex((column) => column.id === columnID);

    this.columns[index].todos?.push(todo);
  }

  @action.bound
  addColumn(columnName: string) {
    this.columns.push(new Column(columnName));
  }
}

class Column {
  id: string;
  name: string;
  @observable todos: ITodo[] = [];

  constructor(name: string, todos: ITodo[] = [], id = uuidv4()) {
    makeObservable(this);

    this.id = id;
    this.name = name;
    this.todos = todos;
  }
}
