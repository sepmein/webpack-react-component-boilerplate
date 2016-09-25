'use strict';
import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import App from './component/main.jsx';
import reducers from './component/reducers';
import sagaMiddleWare from './component/sagas';

let store = createStore(reducers, applyMiddleware(sagaMiddleWare));
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
