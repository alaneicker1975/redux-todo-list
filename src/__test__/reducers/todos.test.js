import todosReducer, { initalState } from '../../client/reducers/todos';

// const toStringMock = () => {
//   return function toString() {};
// };

// jest.mock('../../client/actions', () => ({
//   actions: {
//     setTodos: () => toStringMock(),
//     addTodo: () => toStringMock(),
//     updateTodo: () => toStringMock(),
//     deleteTodo: () => toStringMock(),
//   },
// }));

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
});
