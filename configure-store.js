import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer } from './reducers';

const initialState = {};

const devToolComposition = compose(
    applyMiddleware(thunkMiddleware),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
)(createStore);

export const initStore = initialState =>
    devToolComposition(reducer, initialState);
