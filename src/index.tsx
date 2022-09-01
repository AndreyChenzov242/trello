import ReactDOM from 'react-dom/client';

import { RootStoreContext } from './stores/root/RootContext';
import { rootStore } from './stores/root';
import App from './App';

import './styles/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RootStoreContext.Provider value={rootStore}>
    <App />
  </RootStoreContext.Provider>
);
