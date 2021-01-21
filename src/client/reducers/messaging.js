import { handleActions } from 'redux-actions';
import { actions } from '../actions';

const initialState = {
  message: null,
};

const messagingReducer = handleActions(
  {
    // SET_MESSAGE
    [actions.setMessage.toString()]: (state, action) => ({
      message: action.payload,
    }),
  },
  initialState,
);

export default messagingReducer;
