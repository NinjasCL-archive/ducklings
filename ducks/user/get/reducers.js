import types from './types';

const loading = (state, action) => {
    if (action.type !== types.loading) {
        return state;
    }
    return { loaded: false, data: {} };
};

const success = (state, action) => {
    if (action.type !== types.success) {
        return state;
    }
    return { loaded: true, data: action.payload };
};

const fail = (state, action) => {
    if (action.type !== types.fail) {
        return state;
    }
    return { loaded: false, data: {}, error: action.payload };
};

const reducers = {
    loading,
    success,
    fail
};

export default reducers;
