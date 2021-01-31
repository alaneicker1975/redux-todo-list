import { actions } from '../../client/actions';

describe('Action creators', () => {
  it('should create an action to set a todos', () => {
    const payload = { id: 1, title: 'My Todo', isComplete: false };
    expect(actions.setTodos(payload)).toEqual({
      type: actions.setTodos.toString(),
      payload,
    });
  });

  it('should create an action to add a todo', () => {
    const payload = { title: 'My Todo', isComplete: false };
    expect(actions.addTodo(payload)).toEqual({
      type: actions.addTodo.toString(),
      payload,
    });
  });
});
