import React from 'react';
import { Provider } from 'react-redux';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import store from '../../client/store';
import App from '../../client/App';

configure({ adapter: new Adapter() });

const responses = {
  FETCH_GET: { data: [{ id: 0, text: 'My todo task', isComplete: 0 }] },
};

global.fetch = jest.fn(() => {
  Promise.resolve({
    json: () => Promise.resolve(responses[action]),
  });
});

describe('API middleware', () => {
  let app;

  beforeEach(() => {
    fetch.mockClear();
    app = mount(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });

  it('Should fetch todos', () => {});
});
