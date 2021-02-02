import { handleActions } from 'redux-actions';
import * as types from '../actions/types';

export const initialState = {
  message: null,
};

const messagingReducer = handleActions(
  {
    // SET_MESSAGE
    [types.SET_MESSAGE]: (_state, action) => ({
      message: action.payload,
    }),
  },
  initialState,
);

export default messagingReducer;
