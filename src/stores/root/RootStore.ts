import { ColumnsStore } from '../columns/ColumnsStore';
import { UIStore } from '../uiStore/UIStore';

export class RootStore {
  columnsStore: ColumnsStore;
  uiStore: UIStore;

  constructor(columnsStore: ColumnsStore, uiStore: UIStore) {
    this.columnsStore = columnsStore;
    this.uiStore = uiStore;
  }
}
