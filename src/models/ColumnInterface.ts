import { Todo } from '../entities/Todo';

export interface IColumn {
  id: string;
  name: string;
  todos?: Todo[];
}

export type ColumnID = string;

export type ColumnName = string;
