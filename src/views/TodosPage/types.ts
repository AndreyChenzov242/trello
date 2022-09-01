import { DraggableProvided } from 'react-beautiful-dnd';

import { IColumn } from '../../models/ColumnInterface';
import { ITodo } from '../../models/TodoInterface';

export interface ColumnProps {
  column: IColumn;
  index: number;
}

export interface TodoListProps {
  todos?: ITodo[];
  columnID: string;
}

export interface TodoProps {
  todo: ITodo;
  columnID: string;
  provided: DraggableProvided;
}
