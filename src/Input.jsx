import { useState } from 'react';

function Input(props) {
  const [newTask, setNewTask] = useState("");

  console.log("Input = i am rendering")

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      props.setTasks((t) => [...t, newTask]);

      setNewTask("");
    }
  }

  return (
    <>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />

        <button className="add-button" onClick={addTask}>
          Add
        </button>
    </>
  );
}

export default Input;
