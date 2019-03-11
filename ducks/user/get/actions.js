import types from './types';

const success = data => ({ type: types.success, payload: data });
const fail = error => ({ type: types.fail, payload: error });
const loading = () => ({ type: types.loading, payload: [] });

const actions = {
    success,
    fail,
    loading
};

export default actions;
