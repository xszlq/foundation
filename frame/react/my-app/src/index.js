import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { logger  } from 'redux-logger'

import reducer from './pages/redux-async/reducers'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const middleware = [ thunk, logger ];

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker();
