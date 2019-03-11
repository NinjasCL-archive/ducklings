/**
 * This file holds all the reducers used in the application
 * And combine them in one reducer used in the store init.
 */
import { combineReducers } from 'redux';
import DuckUserGet from '../ducks/user/get';

// Can be edited

const ducks = [
    // Put your all your Ducks here.
    // Including those that will not be saved in localStorage
    DuckUserGet
];

const notSavedDucks = [
    // Put Ducks that should not be saved to localStorage here
    // Like modals.
];


// Generate the Reducers

const savelist = {};
const reducers = {};

ducks.forEach(duck => {
    savelist[duck.namespace] = duck.namespace;
    reducers[duck.namespace] = duck.reducer;
});

notSavedDucks.forEach(duck => {
    if (savelist[duck.namespace]) {
        delete savelist[duck.namespace];
    }
});

export default { 
    reducer: combineReducers(reducers),
    savelist: Object.keys(savelist) 
};
