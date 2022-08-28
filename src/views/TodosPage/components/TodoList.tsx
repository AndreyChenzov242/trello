import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { observer } from 'mobx-react-lite';
import { TodoListProps } from '../interfaces';

export const TodoList: React.FC<TodoListProps> = observer(
  ({ todos, columnName }) => {
    todos?.forEach((todo) => {
      console.log('TodoList: todo.id', todo.id);
      console.log('TodoList: todo.text', todo.text);
    });

    return (
      <Droppable droppableId={columnName}>
        {(provided) => (
          <ul
            className="list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {todos?.map((todo, index) => (
              <Draggable key={todo.id} draggableId={todo.id} index={index}>
                {(provided) => (
                  <li
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="list__item"
                  >
                    {todo.text}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    );
  }
);
