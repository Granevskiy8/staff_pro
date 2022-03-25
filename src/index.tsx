import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import './i18n/i18n'
import { Suspense } from 'react';
const store = setupStore()


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback="loading">
        <App />
      </Suspense>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
