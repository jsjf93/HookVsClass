import React from 'react'
import './App.css';
import TodoList from './hooks-example';
import TodoList2 from './class-example';

function App() {
  return (
    <div className="App">
      <TodoList />
      <TodoList2 />
    </div>
  );
}

export default App;
