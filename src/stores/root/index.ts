import { RootStore } from './RootStore';
import { columnsStore } from '../columns';

export const rootStore = new RootStore(columnsStore);
