import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { observer } from 'mobx-react-lite';

import { droppableType } from '../../../constants/dnd-board';
import { TodoListProps } from '../types';
import { Todo } from './Todo';

export const TodoList: React.FC<TodoListProps> = observer(
  ({ todos, columnID }) => {
    const mappedTodos = todos!.map((todo, index) => (
      <Draggable key={todo.id} draggableId={todo.id} index={index}>
        {(provided) => (
          <Todo todo={todo} columnID={columnID} provided={provided} />
        )}
      </Draggable>
    ));

    return (
      <Droppable droppableId={columnID} type={droppableType.todo}>
        {(provided) => (
          <ul
            className="list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {mappedTodos}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    );
  }
);
