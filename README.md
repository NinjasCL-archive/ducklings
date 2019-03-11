# Ducklings

This is a way to organize Ducks. Inspired by [https://github.com/alexnm/re-ducks](https://github.com/alexnm/re-ducks).

The idea is to have one duck for each namespace. (A namespace is how it will be stored in redux).

## Organization

Similar to `Re-Ducks` but with some minor changes.

```
ducks/
    duck/
    ├── actions.js
    ├── index.js
    ├── triggers.js
    ├── reducers.js
    ├── selectors.js
    ├── tests.js
    ├── types.js
    ├── namespace.js
    ├── state.js
```

### namespace.js
Contains the namespace for this duck.
The namespace is used in `combineReducers` function.

### types.js
Contains the action types that will be triggered. 

### state.js
Contains the default state

### triggers.js
Triggers the actions.

### index.js

Contains the main reducer for this duckling. And export
it's namespace, reducer, selectors and default state.

