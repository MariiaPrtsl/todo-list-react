import { useState } from 'react';

// library imports
import { CheckIcon } from '@heroicons/react/24/solid'

const EditForm = ({ editedTask, updateTask }) => {
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    //updateTask()
    
  }

  return (
    <div role='diaalog' aria-labelledby='editTask' 
    //onClick={}
    >
    <form
      className="todo"
      onSubmit={handleFormSubmit}
      >
      <div className="wrapper">
        <input
          type="text"
          id="editTask"
          className="input"
          value={updatedTaskName}
          onInput={(e) => setUpdatedTaskName(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Edit Task"
        />
        <label
          htmlFor="editTask"
          className="label"
        >Enter Task</label>
      </div>
      <button
        className="btn"
        aria-label={`Confirm task to now read ${updatedTaskName}`}
        type="submit"
        >
        <CheckIcon strokeWidth={2} height = {24} width ={24} />
      </button>
    </form>
    </div>
  )
}
export default EditForm