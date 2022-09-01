import { RootStore } from './RootStore';
import { columnsStore } from '../columns';
import { uiStore } from '../uiStore';

export const rootStore = new RootStore(columnsStore, uiStore);
