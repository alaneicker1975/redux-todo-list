import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import React from 'react';
import App from '../../client/App';
import store from '../../client/store';

describe('<App />', () => {
  let app;

  beforeEach(() => {
    app = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });

  it('Should render without errors', () => {
    expect(app).not.toBeNull();
  });
});
