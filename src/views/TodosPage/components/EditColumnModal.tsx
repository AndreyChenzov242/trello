import { useEffect, useState } from 'react';
import { Button, Input, Modal as AntdModal } from 'antd';
import { observer } from 'mobx-react-lite';

import { useRootStore } from '../../../stores/root/RootHooks';

export const EditColumnModal = observer(() => {
  const [inputValue, setInputValue] = useState('');
  const [isOkDisabled, setIsOkDisabled] = useState(false);

  const { uiStore, columnsStore } = useRootStore();

  const { isEditColumnModalOpen, endColumnEditing, column } = uiStore;
  const { updateColumnName } = columnsStore;

  useEffect(() => {
    if (column) {
      setInputValue(column.name);
    }
  }, [column]);

  useEffect(() => {
    if (inputValue.trim() !== '') {
      setIsOkDisabled(false);
    } else {
      setIsOkDisabled(true);
    }
  }, [inputValue]);

  const handleOk = () => {
    updateColumnName(column!, inputValue);

    endColumnEditing();
  };

  const onChange = (event: any) => {
    setInputValue(event.target.value);
  };

  return (
    <AntdModal
      title="Edit column"
      visible={isEditColumnModalOpen}
      onCancel={endColumnEditing}
      width={300}
      footer={[
        <Button key="back" onClick={endColumnEditing}>
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
