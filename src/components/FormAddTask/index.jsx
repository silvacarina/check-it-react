import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function FormAddTask({ addTask }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const $form = event.target;
    const formData = new FormData(event.target);
    const title = formData.get('title');

    const task = {
      title,
      checked: false,
      id: Date.now(),
    };

    addTask(task);
    $form.reset();
  };

  return (
    <form className="form" id="form-tasks" onSubmit={handleFormSubmit}>
      <div className="form__field">
        <label htmlFor="" className="form__fild__label">New Task</label>
        <input type="text" name="title" required className="form__fild__input" />
        <button type="submit" className="form__button">Add</button>
      </div>
    </form>
  );
}

FormAddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default FormAddTask;
