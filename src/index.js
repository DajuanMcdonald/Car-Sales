import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import 'bulma/css/bulma.css';
import './styles.scss';
import { reducer, initialState } from './reducers/'

// setup Redux store
const store = createStore(
    reducer, 
    initialState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    )

    

    console.log('store', store.getState())

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store} ><App /></Provider>,rootElement);
