import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import { RootStoreContext } from './stores/root/RootContext';
import { rootStore } from './stores/root';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RootStoreContext.Provider value={rootStore}>
    <App />
  </RootStoreContext.Provider>
);
