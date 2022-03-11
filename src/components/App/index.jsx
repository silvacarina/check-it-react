import React from 'react';
import Logo from '../Logo';
import Form from '../Form';
import TasksList from '../TasksList';
import './style.css';

function App() {
  const tasksTodo = [
    {
      title: 'Comprar pudim',
      checked: false,
      id: 1646952830847,
    },
    {
      title: 'Comprar chocolate',
      checked: false,
      id: 1646952839645,
    },
  ];
  const tasksDone = [
    {
      title: 'Comprar bolo',
      checked: true,
      id: 1646952834798,
    },
    {
      title: 'Comer docinhos',
      checked: true,
      id: 1646952842062,
    },
  ];

  return (
    <div className="app">
      <Logo />
      <Form />
      <div className="app__tasks-container">
        <TasksList title="To-do" tasks={tasksTodo} />
        <TasksList title="Done" tasks={tasksDone} />
      </div>
    </div>
  );
}

export default App;
