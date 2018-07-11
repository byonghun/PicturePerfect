import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import reducer from './reducer';
import { createLogger } from 'redux-logger';

const loggerMiddleware =
      createLogger({ predicate: (getState, action) => __DEV__ });

export const store = createStore(combineReducers({reducer}), {},
                                 applyMiddleware(loggerMiddleware));
