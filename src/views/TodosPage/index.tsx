import { observer } from 'mobx-react-lite';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { Button } from 'antd';

import { EditColumnModal } from './components/EditColumnModal';
import { useRootStore } from '../../stores/root/RootHooks';
import { EditTodoModal } from './components/EditTodoModal';
import { droppableType } from '../../constants/dnd-board';
import { Column } from './components/Column';

import './styles.scss';

export const TodosPage = observer(() => {
  const { columnsStore } = useRootStore();

  const { columns, addColumn, moveTodos, moveColumns } = columnsStore;

  const onDragEnd = (result: DropResult) => {
    const { source, destination, type } = result;

    if (!destination) {
      return;
    }

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    if (type === droppableType.column) {
      moveColumns(result);
    } else if (type === droppableType.todo) {
      moveTodos(result);
    }
  };

  const mappedColumns = columns.map((column, index) => (
    <Column column={column} key={column.id} index={index} />
  ));

  return (
    <div className="main-content">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="board"
          direction="horizontal"
          type={droppableType.column}
        >
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="board"
            >
              {mappedColumns}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <Button
        type="primary"
        onClick={() => {
          addColumn();
        }}
      >
        + Add new column
      </Button>

      <EditTodoModal />
      <EditColumnModal />
    </div>
  );
});
