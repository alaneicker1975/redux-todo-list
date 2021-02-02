import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import handleAsync from '../../client/utilities/handleAsync';
import store from '../../client/store';

const mockStore = configureStore([thunk]);

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        data: [{ id: 1, title: 'My todo', isComplete: false }],
      }),
  }),
);

describe('handleAsync', () => {
  it('should handle an asynchronous request', async () => {
    const { data } = await handleAsync(fetch('/api/todos'));
    expect(data).toEqual([{ id: 1, title: 'My todo', isComplete: false }]);
  });

  it('should catch errors', () => {
    const error = 'Could not fetch';
    fetch.mockImplementationOnce(() => Promise.reject(error));
    expect(handleAsync(fetch('/api/todos'))).rejects.toEqual(error);
  });

  // it('should dispatch the error to the reducer', () => {
  //   const store = mockStore({ todos: [] });
  //   fetch.mockImplementationOnce(() => Promise.reject('Could not fetch'));
  //   handleAsync(fetch('/api/todos'));
  //   console.log(store.getActions());
  // });
});
