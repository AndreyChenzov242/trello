import React, { useState } from 'react';
import { CloseOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Draggable } from 'react-beautiful-dnd';
import { observer } from 'mobx-react-lite';
import { Button, Input, Card } from 'antd';

import { useRootStore } from '../../../stores/root/RootHooks';
import { ColumnProps } from '../types';
import { TodoList } from './TodoList';

export const Column: React.FC<ColumnProps> = observer(({ column, index }) => {
  const { id, name, todos } = column;

  const [inputValue, setInputValue] = useState('');

  const { columnsStore, uiStore } = useRootStore();

  const { addTodo, removeColumn } = columnsStore;

  const { startColumnEditing } = uiStore;

  const onChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const addTodoHandler = () => {
    if (inputValue.trim() === '') return;
    addTodo(id, inputValue);
    setInputValue('');
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Card
          title={name}
          size="small"
          className="column"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          extra={
            <>
              <Button
                size="small"
                type={'text'}
                onClick={() => startColumnEditing(column)}
              >
                <EditOutlined />
              </Button>
              <Button
                size="small"
                type={'text'}
                onClick={() => removeColumn(id)}
              >
                <CloseOutlined />
              </Button>
            </>
          }
        >
          <div className="column-content">
            <TodoList todos={todos} columnID={id} />

            <Input.Group className="input-group">
              <Input
                type="text"
                value={inputValue}
                onChange={onChange}
                placeholder="Type new task"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    addTodoHandler();
                  }
                }}
              />
              <Button type="primary" onClick={addTodoHandler}>
                <PlusOutlined />
              </Button>
            </Input.Group>
          </div>
        </Card>
      )}
    </Draggable>
  );
});
