import { ColumnsStore } from '../columns/ColumnsStore';

export class RootStore {
  columnsStore: ColumnsStore;

  constructor(columnsStore: ColumnsStore) {
    this.columnsStore = columnsStore;
  }
}
