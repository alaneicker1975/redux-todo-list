import configureStore from 'redux-mock-store';
import { fetchGet } from '../../client/actions';
import api from '../../client/middleware/api';
import { initalState } from '../../client/reducers/todos';

const mockStore = configureStore([api]);

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        data: [{ id: 1, title: 'My todo', isComplete: false }],
      }),
  }),
);

describe('API middleware', () => {
  let store;

  beforeEach(() => {
    store = mockStore(initalState);
  });

  it('should fetch todos', () => {
    store.dispatch(fetchGet());
    console.log(store.getActions());
  });
});
