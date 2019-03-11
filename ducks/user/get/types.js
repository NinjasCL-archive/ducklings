import namespace from '../../../redux/namespace';
import ns from './namespace';

const success = `${namespace}${ns}/ducks/user/get/success`;
const fail = `${namespace}${ns}/ducks/user/get/fail`;
const loading = `${namespace}${ns}/ducks/user/get/loading`;

const types = {
    success,
    fail,
    loading
};

export default types;
