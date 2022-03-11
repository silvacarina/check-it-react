import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import propTypes from 'prop-types';

function TaskList({ title, tasks }) {
  return (
    <section className="tasks-section">
      <h2 className="tasks-section__title">{title}</h2>
      <ul className="tasks-section__list" id="list-todo">
        {
        tasks.map((currentTask) => (
          <li className="tasks-section__item" key={currentTask.id}>
            <label className="tasks-section__item__label">
              <input checked={currentTask.checked} className="tasks-section__item__checkbox" type="checkbox" />
              <span className="tasks-section__item__text">{currentTask.title}</span>
            </label>
            <button type="button" className="tasks-section__item__remove">X</button>
          </li>
        ))
      }
      </ul>
    </section>
  );
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(propTypes.shape({
    title: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default TaskList;
