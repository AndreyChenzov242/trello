import React from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react';
import { Button } from 'antd';

import { useRootStore } from '../../../stores/root/RootHooks';
import { TodoProps } from '../types';

export const Todo: React.FC<TodoProps> = observer(
  ({ todo, columnID, provided }) => {
    const { id, text } = todo;

    const { columnsStore, uiStore } = useRootStore();

    const { removeTodo } = columnsStore;
    const { startTodoEditing } = uiStore;

    return (
      <li
        className="list__item"
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        {text}

        <div className="action-group">
          <Button
            size="small"
            type={'text'}
            onClick={() => startTodoEditing(columnID, todo)}
          >
            <EditOutlined />
          </Button>
          <Button
            size="small"
            type={'text'}
            onClick={() => removeTodo(columnID, id)}
          >
            <DeleteOutlined />
          </Button>
        </div>
      </li>
    );
  }
);
