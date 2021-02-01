import { createActions } from 'redux-actions';
import * as types from './types';

const actions = createActions({
  [types.SET_TODOS]: (payload) => payload,
  [types.ADD_TODO]: (payload) => payload,
  [types.UPDATE_TODO]: (payload) => payload,
  [types.DELETE_TODO]: (payload) => payload,
  [types.FETCH_GET]: (payload) => payload,
  [types.FETCH_PUT]: (payload) => payload,
  [types.FETCH_PATCH]: (payload) => payload,
  [types.FETCH_DELETE]: (payload) => payload,
  [types.SET_MESSAGE]: (payload) => payload,
});

export default actions;
