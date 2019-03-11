import types from './types';
import reducers from './reducers';
import triggers from './triggers';
import initState from './state';
import namespace from './namespace';

const handlers = {
    [types.success]: reducers.success,
    [types.fail]: reducers.fail,
    [types.loading]: reducers.loading
};

const reducer = (state = initState, action) => {
    const handler = handlers[action.type];
    return handler ? handler(state, action) : state;
};

const duck = {
    namespace,
    reducer,
    triggers,
    default: initState
};

export default duck;
