import React from 'react';
import Logo from '../Logo';
import Form from '../Form';
import TasksList from '../TasksList';
import './style.css';

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <div className="app__tasks-container">
        <TasksList title="To-do" />
        <TasksList title="Done" />
      </div>
    </div>
  );
}

export default App;
