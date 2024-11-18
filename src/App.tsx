import React, { useState } from "react";
import ToDoForm from "./components/ToDoForm";
import TasksList from "./components/TasksList";

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
      <ToDoForm
        submitHandler={submitHandler}
        task={task}
        changeHandler={changeHandler}
        editId={editId}
      />
      <TasksList tasks={tasks} updateHandler={updateHandler} deleteHandler={deleteHandler} />
    </div>
  );
}

export default App;
