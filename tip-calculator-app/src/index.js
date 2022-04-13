import './index.scss';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools());

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('root element not found');
const root = ReactDOM.createRoot(rootEl);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
