import { useState } from 'react';
import ToDoItem from "./ToDoItem.jsx";
import Input from "./Input.jsx";

function ToDoList() {
  const [tasks, setTasks] = useState([]);

  console.log("ToDoList = i am rendering")

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <Input setTasks={setTasks} />
      </div>
      <ToDoItem tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default ToDoList;
