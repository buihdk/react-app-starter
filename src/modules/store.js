import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import users from './users/reducers';

const allReducers = combineReducers({
  users,
});

export default createStore(allReducers, {}, applyMiddleware(thunk));
