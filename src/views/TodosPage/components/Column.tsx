import React, { useState } from 'react';
import { ColumnProps } from '../interfaces';
import { TodoList } from './TodoList';
import { useRootStore } from '../../../stores/root/RootHooks';
import { observer } from 'mobx-react-lite';
import { makeTodo } from '../../../utils/makeTodo';

export const Column: React.FC<ColumnProps> = observer(({ column }) => {
  const [inputValue, setInputValue] = useState('');

  const onChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const { columnsStore } = useRootStore();

  const { addTodo } = columnsStore;

  return (
    <div className="column">
      <div className="title">{column.name}</div>
      <TodoList todos={column.todos} columnName={column.name} />
      <div className="input-wrapper">
        <input type="text" value={inputValue} onChange={onChange} />
        <button onClick={() => addTodo(column.id, makeTodo(inputValue))}>
          +
        </button>
      </div>
    </div>
  );
});
