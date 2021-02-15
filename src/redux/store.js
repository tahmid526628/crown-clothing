import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist'; // that allows us to cache out store

import rootReducer from './root-reducer';

const middlewares = [];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store); // it will return a persisted store. now we've to wrapped up App component in index.js. before we need to configure in rootReducer

