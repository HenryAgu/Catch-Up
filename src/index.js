import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// combined reducer
import rootReducer  from './store/reducers/rootReducer';

// store
import { createStore, applyMiddleware } from 'redux';

// provider
import { Provider } from 'react-redux';

// thunk
import thunk from 'redux-thunk';

// store
const store = createStore(rootReducer, applyMiddleware(thunk))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

