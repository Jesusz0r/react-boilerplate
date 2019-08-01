import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from './reducers';

const reduxMiddlewares = applyMiddleware(thunk, reduxImmutableStateInvariant());

export default function configureStore(initialState = {}) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(rootReducer, initialState, composeEnhancers(reduxMiddlewares));
}
