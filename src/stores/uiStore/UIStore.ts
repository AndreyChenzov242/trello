import { action, makeObservable, observable } from 'mobx';

import { ColumnID, IColumn } from '../../models/ColumnInterface';
import { Todo } from '../../entities/Todo';

export class UIStore {
  @observable isEditTodoModalOpen: boolean = false;
  @observable isEditColumnModalOpen: boolean = false;
  @observable todo: Todo | null = null;
  @observable column: IColumn | null = null;
  columnID: ColumnID | null = null;

  constructor() {
    makeObservable(this);
  }

  @action.bound
  endTodoEditing() {
    this.todo = null;
    this.columnID = null;

    this.isEditTodoModalOpen = false;
  }

  @action.bound
  endColumnEditing() {
    this.column = null;

    this.isEditColumnModalOpen = false;
  }

  @action.bound
  startTodoEditing(columnID: ColumnID, todo: Todo) {
    this.isEditTodoModalOpen = true;

    this.columnID = columnID;
    this.todo = todo;
  }

  @action.bound
  startColumnEditing(column: IColumn) {
    this.isEditColumnModalOpen = true;

    this.column = column;
  }
}
