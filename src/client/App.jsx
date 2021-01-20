import React from 'react';
import TodoList from './components/TodoList';

const App = () => (
  <div className="App">
    <main>
      <h1 className="text-align-center">My Todos</h1>
      <TodoList />
    </main>
  </div>
);

export default App;
