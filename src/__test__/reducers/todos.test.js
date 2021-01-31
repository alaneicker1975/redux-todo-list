import todosReducer, { initalState } from '../../client/reducers/todos';

describe('Todos reducer', () => {
  it('should return the intial state', () => {
    expect(todosReducer(undefined, {})).toEqual(initalState);
  });

  it('Should return todos', () => {
    const payload = [{ id: 1, title: 'My Todo', isComplete: true }];
    expect(
      todosReducer(undefined, {
        type: 'SET_TODOS',
        payload,
      }),
    ).toEqual({ todos: payload });
  });

  it('should add a todo', () => {
    const payload = { id: 1, title: 'My Todo', isComplete: true };
    expect(
      todosReducer(undefined, {
        type: 'ADD_TODO',
        payload,
      }),
    ).toEqual({
      todos: [payload],
    });
  });
});
