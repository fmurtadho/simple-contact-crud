import {
    applyMiddleware,
    combineReducers,
    createStore,
} from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

import {ContactReducer} from "../Reducers/Contact/ContactReducer";

const middleware = [thunk, reduxLogger];

const rootReducer = combineReducers({
    contact: ContactReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

export default store;
