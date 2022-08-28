import { IColumn } from '../services/column/ColumnInterface';
import { todos, todos2 } from './todos';

export const columns = [
  {
    name: '1',
    todos: todos,
  },
  {
    name: '2',
    todos: todos2,
  },
  {
    name: 'third column',
    todos: [],
  },
];
