import { handleActions } from 'redux-actions';
import { todoActions } from '../actions/todos';

const initialState = {
  message: null,
};

const messagingReducer = handleActions(
  {
    // SET_MESSAGE
    [todoActions.setMessage.toString()]: (state, action) => ({
      message: action.payload,
    }),
  },
  initialState,
);

export default messagingReducer;
