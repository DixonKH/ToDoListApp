import React, { useState } from "react";

interface Task {
  id: string;
  task: string;
}

function App() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editId, setEditId] = useState<string>("");

  function changeHandler(e: any) {
    setTask(e.target.value);
  }

  function submitHandler(e: any) {
    e.preventDefault();

    if (editId) {
      const editTask: any = tasks.find((i) => i.id === editId);
      const updateTasks = tasks.map((t) => {
        return t.id === editTask.id
          ? (t = { id: t.id, task })
          : { id: t.id, task: t.task };
      });
      setTasks(updateTasks);
      setEditId("");
      setTask("");
      return;
    }

    if (task.trim() !== "") {
      setTasks([...tasks, { id: `${task} - ${Date.now()}`, task }]); // Add the new task to the existing tasks list.
      setTask("");
    }
  }

  function deleteHandler(id: string) {
    const deleteTask: Task[] = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(deleteTask);
  }

  function updateHandler(id: string) {
    const editTask: any = tasks.find((i) => i.id === id);
    console.log(editTask);
    setTask(editTask.task);
    setEditId(id);
  }
  return (
    <div className="container">
      <h2>To Do List App</h2>
      <form className="form-input" onSubmit={submitHandler}>
        <input
          type="text"
          value={task}
          className="text-input"
          onChange={changeHandler}
          placeholder="Add a new task"
        />
        <button type="submit" className="submit-btn">
          {editId ? "Edit" : "Go"}
        </button>
      </form>

      <ul>
        {tasks.map((t) => {
          return (
            <li key={t.id}>
              <span className="single-text">{t.task}</span>
              <button onClick={() => updateHandler(t.id)}>Update</button>
              <button onClick={() => deleteHandler(t.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
