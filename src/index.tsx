import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import "./index.css";
import { HashRouter } from 'react-router-dom';
import { store } from './services/store';

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement);

root.render(
  <>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </>
)

