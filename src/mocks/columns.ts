import { Column } from '../entities/Column';
import { todos, todos2 } from './todos';

export const columns: Column[] = [
  new Column('Todo', todos),
  new Column('Done', todos2),
];
