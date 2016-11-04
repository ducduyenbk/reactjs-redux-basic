import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
const loggerMiddleware = createLogger();

import rootReducer from '../reducers';

export default function configureStore(initialState) {

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(
        	thunk,
            loggerMiddleware
        )
    );
    return store;
}