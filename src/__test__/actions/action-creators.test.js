import actions from '../../client/actions/action-creators';
import * as types from '../../client/actions/types';

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
