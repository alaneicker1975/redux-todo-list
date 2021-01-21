import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import api from './middleware/api';

const store = createStore(reducer, applyMiddleware(api));

export default store;
