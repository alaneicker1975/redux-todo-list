import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchGet } from '../../client/actions/thunks';
import * as types from '../../client/actions/types';
import { initalState } from '../../client/reducers/todos';

const mockStore = configureStore([thunk]);

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        data: [{ id: 1, title: 'My todo', isComplete: false }],
      }),
  }),
);

describe('Thunks', () => {
  let store;

  beforeEach(() => {
    store = mockStore(initalState);
  });

  it('should fetch todos', async () => {
    store.dispatch(fetchGet()).then(() => {
      expect(store.getActions()).toEqual([
        {
          type: types.SET_TODOS,
          payload: [{ id: 1, title: 'My todo', isComplete: false }],
        },
      ]);
    });
  });

  it('should add a todo', () => {});

  it('should update a todo', () => {});

  it('should delete a todo', () => {});
});
