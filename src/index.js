import React from 'react';
import ReactDOM from 'react-dom';
import { Alert } from '@atomikui/core';
import '@atomikui/core/dist/styles/main.min.css';

const App = () => {
  return <Alert theme="error">This is an error!!!!</Alert>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
