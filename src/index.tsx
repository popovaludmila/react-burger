import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore,  applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { rootReducer } from './services/reducers/index';
import "./index.css";
import { BrowserRouter } from 'react-router-dom';


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);


const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement);

root.render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </>
)
