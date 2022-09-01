import { action, makeObservable, observable } from 'mobx';
import { DropResult } from 'react-beautiful-dnd';

import { ColumnID, IColumn } from '../../models/ColumnInterface';
import { reorderArray } from '../../utils/reorderArray';
import { Column } from '../../entities/Column';
import { columns } from '../../mocks/columns';
import { Todo } from '../../entities/Todo';

export class ColumnsStore {
  @observable columns: Column[] = [];

  constructor() {
    makeObservable(this);

    this.columns = observable(columns);
  }

  @action.bound
  addTodo(columnID: ColumnID, todoText: string) {
    const index = this.columns.findIndex((column) => column.id === columnID);

    this.columns[index].todos?.push(new Todo(todoText));
  }

  @action.bound
  addColumn(columnName: ColumnID = 'New column') {
    this.columns.push(new Column(columnName));
  }

  @action.bound
  removeColumn(columnID: ColumnID) {
    const index = this.columns.findIndex((column) => column.id === columnID);

    this.columns.splice(index, 1);
  }

  @action.bound
  removeTodo(columnID: ColumnID, todoID: string) {
    const indexColumn = this.columns.findIndex(
      (column) => column.id === columnID
    );
    const indexTodo = this.columns[indexColumn].todos!.findIndex(
      (todo) => todo.id === todoID
    );

    this.columns[indexColumn].todos!.splice(indexTodo, 1);
  }

  @action.bound
  moveColumns(result: DropResult) {
    const { index: indexTodoFrom } = result.source;
    const { index: indexTodoTo } = result.destination!;

    this.columns = reorderArray(this.columns, indexTodoFrom, indexTodoTo);
  }

  @action.bound
  moveTodos(result: DropResult) {
    const { droppableId: idColumnFrom, index: indexTodoFrom } = result.source;
    const { droppableId: idColumnTo, index: indexTodoTo } = result.destination!;

    const indexColumnFrom = this.columns.findIndex(
      (column) => column.id === idColumnFrom
    );
    const indexColumnTo = this.columns.findIndex(
      (column) => column.id === idColumnTo
    );

    if (idColumnFrom === idColumnTo) {
      this.columns[indexColumnFrom].todos = reorderArray(
        this.columns[indexColumnFrom].todos!,
        indexTodoFrom,
        indexTodoTo
      );
    } else {
      const item = this.columns[indexColumnFrom].todos!.splice(
        indexTodoFrom,
        1
      )[0];
      this.columns[indexColumnTo].todos!.splice(indexTodoTo, 0, item);
    }
  }

  @action.bound
  updateTodoText(columnID: ColumnID, todoID: string, text: string) {
    const indexColumn = this.columns.findIndex(
      (column) => column.id === columnID
    );

    const indexTodo = this.columns[indexColumn].todos!.findIndex(
      (todo) => todo.id === todoID
    );

    this.columns[indexColumn].todos![indexTodo].text = text;
  }

  @action.bound
  updateColumnName(incomeColumn: IColumn, name: string) {
    const indexColumn = this.columns.findIndex(
      (column) => column.id === incomeColumn.id
    );

    this.columns[indexColumn].name = name;
  }
}
