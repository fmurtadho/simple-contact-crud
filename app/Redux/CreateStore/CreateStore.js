import {
    applyMiddleware,
    combineReducers,
    createStore,
} from 'redux';
import thunk from 'redux-thunk';
import {ContactReducer} from "../Reducers/Contact/ContactReducer";

const middleware = [thunk];

const rootReducer = combineReducers({
    contact: ContactReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

export default store;
