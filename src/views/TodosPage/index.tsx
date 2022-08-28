import React from 'react';
import { useRootStore } from '../../stores/root/RootHooks';
import { observer } from 'mobx-react-lite';
import { Column } from './components/Column';
import { DragDropContext } from 'react-beautiful-dnd';
import './styles.scss';

export const TodosPage = observer(() => {
  const { columnsStore } = useRootStore();

  const { columns, addColumn } = columnsStore;

  const onDragEnd = (result: any) => {
    const { source, destination, draggableId } = result;
  };

  return (
    <div className="column-wrapper">
      <DragDropContext onDragEnd={onDragEnd}>
        {columns.map((column) => (
          <Column column={column} key={column.id} />
        ))}
      </DragDropContext>

      <button
        className="addCol"
        onClick={() => {
          addColumn('new column');
        }}
      >
        add column
      </button>
    </div>
  );
});
