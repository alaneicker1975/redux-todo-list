import { combineReducers } from 'redux';
import todosReducer from './todos';
import messagingReducer from './messaging';

export default combineReducers({ todosReducer, messagingReducer });
