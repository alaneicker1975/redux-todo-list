import { handleActions } from 'redux-actions';
import * as types from '../actions/types';

export const initialState = {
  message: null,
};

const messagingReducer = handleActions(
  {
    // SET_MESSAGE
    [types.SET_MESSAGE]: (state, action) => ({
      message: action.payload,
    }),
    // CLEAR_MESSAGE
    [types.CLEAR_MESSAGE]: (state, action) => ({
      message: null,
    }),
  },
  initialState,
);

export default messagingReducer;
