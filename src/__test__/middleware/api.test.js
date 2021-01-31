import store from '../../client/store';
import { fetchGet } from '../../client/actions';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        data: [{ id: 1, title: 'My todo', isComplete: false }],
      }),
  }),
);

describe('API middleware', () => {
  it('should fetch todos', () => {
    store.dispatch(fetchGet());
    //expect(store.todos).toEqual([]);
  });
});
