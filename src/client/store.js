import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from './reducers';
import api from './middleware/api';

const store = createStore(reducer, applyMiddleware(ReduxThunk));

export default store;
