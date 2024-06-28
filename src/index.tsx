import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import globalStyles from './styles/globalStyles';
import { Global } from '@emotion/react';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <Global styles={globalStyles} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
