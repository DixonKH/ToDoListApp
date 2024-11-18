import React from 'react';
interface Task {
    id: string;
    task: string;
  }

interface TaskType {
    updateHandler: (e:any) => void; 
    deleteHandler: (e:any) => void; 
    tasks: Task[];
}

function TasksList({tasks, updateHandler, deleteHandler}: TaskType) {
  return (
    <ul>
        {tasks.map((t: any) => {
          return (
            <li key={t.id}>
              <span className="single-text">{t.task}</span>
              <button onClick={() => updateHandler(t.id)}>Update</button>
              <button onClick={() => deleteHandler(t.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
  )
}

export default TasksList
