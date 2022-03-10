import './style.css'

function Form () {
    return (
        <form className="form" id="form-tasks">
        <div className="form__field">
          <label for="" class="form__fild__label">New Task</label>
          <input type="text" name="title" required className="form__fild__input" />
          <button type="submit" className="form__button">Add</button>
        </div>
      </form>
    )
}

export default Form