import React from 'react'

interface formTypes {
    submitHandler: (e:any) => void;
    changeHandler: (e: any) => void;
    task: string;
    editId: string,
  
}

const ToDoForm = (props: formTypes) => {
  return (
    <form className="form-input" onSubmit={props.submitHandler}>
        <input
          type="text"
          value={props.task}
          className="text-input"
          onChange={props.changeHandler}
          placeholder="Add a new task"
        />
        <button type="submit" className="submit-btn">
          {props.editId ? "Edit" : "Go"}
        </button>
      </form>
  )
}

export default ToDoForm
