import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from 'redux/reducers';

const appReducers = combineReducers({ food: reducers });

export default createStore(
   appReducers,
   composeWithDevTools(
      applyMiddleware(thunk, createLogger()),
   ),
);