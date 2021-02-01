import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  fetchGet,
  fetchPut,
  fetchPatch,
  fetchDelete,
} from '../../client/actions/thunks';
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
    await store.dispatch(fetchGet());
    expect(store.getActions()).toEqual([
      {
        type: types.SET_TODOS,
        payload: [{ id: 1, title: 'My todo', isComplete: false }],
      },
    ]);
  });

  it('should add a todo', async () => {
    const payload = { title: 'My todo', isComplete: false };
    await store.dispatch(fetchPut(payload));
    expect(store.getActions()).toEqual([
      {
        type: types.ADD_TODO,
        payload: payload,
      },
    ]);
  });

  it('should update a todo', async () => {
    const payload = { title: 'My todo', isComplete: false };
    await store.dispatch(fetchPatch(payload));
    expect(store.getActions()).toEqual([
      {
        type: types.UPDATE_TODO,
        payload: payload,
      },
    ]);
  });

  it('should delete a todo', async () => {
    await store.dispatch(fetchDelete(1));
    expect(store.getActions()).toEqual([
      {
        type: types.DELETE_TODO,
        payload: 1,
      },
    ]);
  });
});
