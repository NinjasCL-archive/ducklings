import actions from './actions';

const get = () => dispatch => {

    dispatch(actions.loading());

    // This is a sample query to fetch some data 
    // and save it to localStorage using redux.
    
    fetch('https://randomuser.me/api/?results=1')
    .then(data => {
        dispatch(actions.success(data));
    })
    .catch(error => {
        dispatch(actions.fail(error));
    });

};

const success = (dispatch, data) => dispatch(actions.success(data));
const loading = (dispatch) => dispatch(actions.loading());

const triggers = {
    get,
    success, 
    loading
};

export default triggers;
