import { SET_MESSAGE, CLEAR_MESSAGE } from '../constants/action-types';

const initialState = {
  message: null,
};

const messagingReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_MESSAGE:
      return { ...state, message: payload };
    case CLEAR_MESSAGE:
      return { ...state, message: null };
    default:
      return state;
  }
};

export default messagingReducer;
