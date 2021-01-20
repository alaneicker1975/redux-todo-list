import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from '@atomikui/core';
import Todos from './components/Todos';

const App = () => {
  const {
    messagingReducer: { message },
  } = useSelector((state) => state);
  return (
    <div className="App">
      <main>
        <h1 className="text-align-center">My Todos</h1>
        {message && (
          <Alert className="margin-top-16" theme={message.type}>
            {message.text}
          </Alert>
        )}
        {(!message || message.type !== 'error') && <Todos />}
      </main>
    </div>
  );
};

export default App;
