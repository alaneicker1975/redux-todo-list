import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import actions from '../../client/actions/action-creators';
import { fetchGet } from '../../client/actions/thunks';
import * as types from '../../client/actions/types';
import { initalState } from '../../client/reducers/todos';

describe('Action creators', () => {
  it('should create an action to set a todos', () => {
    const payload = { id: 1, title: 'My Todo', isComplete: false };
    expect(actions.setTodos(payload)).toEqual({
      type: types.SET_TODOS,
      payload,
    });
  });

  it('should create an action to add a todo', () => {
    const payload = { title: 'My Todo', isComplete: false };
    expect(actions.addTodo(payload)).toEqual({
      type: types.ADD_TODO,
      payload,
    });
  });
});

describe('Thunks', () => {
  const mockStore = configureStore([thunk]);

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          data: [{ id: 1, title: 'My todo', isComplete: false }],
        }),
    }),
  );

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
});
