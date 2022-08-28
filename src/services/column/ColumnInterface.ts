import { type } from 'os';
import { ITodo } from '../todo/TodoInterface';

export interface IColumn {
  id: string;
  name: string;
  todos?: ITodo[];
}

export type ColumnID = string;

export type ColumnName = string;
