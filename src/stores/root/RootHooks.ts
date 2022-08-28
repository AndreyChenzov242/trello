import { useContext } from 'react';

import { RootStore } from './RootStore';
import { RootStoreContext } from './RootContext';

export function useRootStore(): RootStore {
  const rootStore = useContext(RootStoreContext);

  if (rootStore === undefined) {
    throw new Error('useRootStore must be used within a RootStoreProvider');
  }

  return rootStore;
}
