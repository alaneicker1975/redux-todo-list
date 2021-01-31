import todosReducer, { initalState } from '../../client/reducers/todos';
import * as types from '../../client/actions/types';

describe('Todos reducer', () => {
  it('should return the intial state', () => {
    expect(todosReducer(undefined, {})).toEqual(initalState);
  });

  it('Should return todos', () => {
    const payload = [{ id: 1, title: 'My Todo', isComplete: true }];
    expect(
      todosReducer(undefined, {
        type: types.SET_TODOS,
        payload,
      }),
    ).toEqual({ todos: payload });
  });

  it('should add a todo', () => {
    const payload = { id: 1, title: 'My Todo', isComplete: true };
    expect(
      todosReducer(undefined, {
        type: types.ADD_TODO,
        payload,
      }),
    ).toEqual({
      todos: [payload],
    });
  });

  it('Should delete a todo', () => {
    initalState.todos = [{ id: 1, title: 'My Todo', isComplete: true }];
    expect(
      todosReducer(undefined, {
        type: types.DELETE_TODO,
        payload: 1,
      }),
    ).toEqual({ todos: [] });
  });
});
