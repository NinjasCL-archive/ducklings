import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';

import ducks from './ducks';

let middlewares = [thunk];

if (process.env.NODE_ENV === 'dev') {
    const logger = createLogger({ collapsed: true, diff: true });
    middlewares = [thunk, logger];
}

const enhancer = compose(
    applyMiddleware(...middlewares),
    persistState(ducks.savelist)
);

export default createStore(ducks.reducer, enhancer);
