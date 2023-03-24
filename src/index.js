import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore,  applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { rootReducer } from './services/reducers/index.js';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
)

