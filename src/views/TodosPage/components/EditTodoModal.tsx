import { useEffect, useState } from 'react';
import { Button, Input, Modal as AntdModal } from 'antd';
import { observer } from 'mobx-react-lite';

import { useRootStore } from '../../../stores/root/RootHooks';

export const EditTodoModal = observer(() => {
  const [inputValue, setInputValue] = useState('');
  const [isOkDisabled, setIsOkDisabled] = useState(false);

  const { uiStore, columnsStore } = useRootStore();

  const { isEditTodoModalOpen, endTodoEditing, todo, columnID } = uiStore;
  const { updateTodoText } = columnsStore;

  useEffect(() => {
    if (todo) {
      setInputValue(todo.text);
    }
  }, [todo]);

  useEffect(() => {
    if (inputValue.trim() !== '') {
      setIsOkDisabled(false);
    } else {
      setIsOkDisabled(true);
    }
  }, [inputValue]);

  const handleOk = () => {
    updateTodoText(columnID!, todo!.id, inputValue);

    endTodoEditing();
  };

  const onChange = (event: any) => {
    setInputValue(event.target.value);
  };

  return (
    <AntdModal
      title="Edit todo"
      visible={isEditTodoModalOpen}
      onCancel={endTodoEditing}
      width={300}
      footer={[
        <Button key="back" onClick={endTodoEditing}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={handleOk}
          disabled={isOkDisabled}
        >
          Ok
        </Button>,
      ]}
    >
      <Input
        type="text"
        value={inputValue}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleOk();
          }
        }}
      />
    </AntdModal>
  );
});
