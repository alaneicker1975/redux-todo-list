import React, { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { Alert, Overlay, Spinner } from '@atomikui/core';

const Todos = lazy(() => import('./components/Todos'));

const App = () => {
  const {
    messagingReducer: { message },
  } = useSelector((state) => state);

  return (
    <Suspense
      fallback={
        <Overlay isActive>
          <Spinner theme="white" themeVariant="light" size="lg" />
        </Overlay>
      }
    >
      <div className="App">
        <main>
          {message && (
            <Alert className="margin-top-16" theme={message.type}>
              {message.text}
            </Alert>
          )}
          {(!message || message.type !== 'error') && (
            <Todos headerText="My Todos" />
          )}
        </main>
      </div>
    </Suspense>
  );
};

export default App;
