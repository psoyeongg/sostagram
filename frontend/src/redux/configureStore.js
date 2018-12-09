import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { i18nState } from 'redux-i18n';
import user from 'redux/modules/user';
// import Reactotron from 'ReactotronConfig';

const env = process.env.NODE_ENV;

const middlewares = [thunk];

if (env === 'development') {
    const { logger } = require('redux-logger');
    middlewares.push(logger);
}

const reducer = combineReducers({
    user,
    i18nState,
});

let store;

if (env === 'development') {
    store = initialState => 
    createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares))
    );
} else {
    store = initialState => 
        createStore(reducer, applyMiddleware(...middlewares));
}


export default store();
