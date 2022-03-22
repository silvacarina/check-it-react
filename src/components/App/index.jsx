import React from 'react';
import useLocalStorageState from 'use-local-storage-state';
import Logo from '../Logo';
import FormAddTask from '../FormAddTask';
import TasksList from '../TasksList';
import './style.css';

function App() {
  const [tasks, setTasks] = useLocalStorageState('tasks', {
    defaultValue: [],
  });

  const tasksTodo = tasks.filter((task) => task.checked === false);
  const tasksDone = tasks.filter((task) => task.checked === true);

  const addTask = (task) => {
    // clonando a lista
    const newTasks = [...tasks];
    // adiciona novo item na lista clonada
    newTasks.push(task);
    // atualiza ;ista para usar a nova lista com o item adiconado
    setTasks(newTasks);
  };

  const removeTask = (task) => {
    // clonando a lista
    const newTasks = [...tasks];
    // remove item da lista clonada
    const taskToRemove = tasks.findIndex((item) => item.id === task.id);
    newTasks.splice(taskToRemove, 1);
    // atualiza lista para usar a nova lista com item removido
    setTasks(newTasks);
  };

  const updateTaskChecked = (task) => {
    // clonando a lista
    const newTasks = [...tasks];
    // encontra o item a ser aatualizado dentro da lista clonada
    const taskToUpdate = newTasks.findIndex((item) => item.id === task.id);
    // atualiza propriedade "checked" do item da lista clonada para ser o inverso do valor atual
    newTasks[taskToUpdate].checked = !newTasks[taskToUpdate].checked;
    // atualiza lista para usar a nova lista com item atualizado
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <Logo />
      <FormAddTask addTask={addTask} />
      <div className="app__tasks-container">
        <TasksList title="To-do" tasks={tasksTodo} removeTask={removeTask} updateTaskChecked={updateTaskChecked} />
        <TasksList title="Done" tasks={tasksDone} removeTask={removeTask} updateTaskChecked={updateTaskChecked} />
      </div>
    </div>
  );
}

export default App;
