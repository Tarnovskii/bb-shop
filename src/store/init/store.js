import {applyMiddleware, compose, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import {combinedReducers} from "./combined-reducers";

const composeSetup = (process.env.NODE_ENV !== 'production') &&
                        (typeof window === 'object') &&
                        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
                        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
                        compose

const middlewareEnhancer = applyMiddleware(thunk);

export const store = createStore(combinedReducers, {}, composeSetup(middlewareEnhancer));
