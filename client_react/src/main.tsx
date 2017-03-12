import './main.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Redux from 'redux'
import { Provider } from 'react-redux';

import appReducer from './main/reducer';
import Routes from './main/routes';

const initialState = {};

const store: Redux.Store<any> = Redux.createStore(appReducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);

