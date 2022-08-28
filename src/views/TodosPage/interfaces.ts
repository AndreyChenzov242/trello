import { DroppableProvided } from 'react-beautiful-dnd';
import { IColumn } from '../../services/column/ColumnInterface';
import { ITodo } from '../../services/todo/TodoInterface';

export interface ColumnProps {
  column: IColumn;
}

export interface TodoListProps {
  todos?: ITodo[];
  columnName: string;
}
