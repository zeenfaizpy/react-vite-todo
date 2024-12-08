function ToDoItem(props) {

  console.log("ToDoItem = i am rendering")

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);

    props.setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];

      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];

      props.setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];

      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];

      props.setTasks(updatedTasks);
    }
  }

  return (
      <ol>
        {props.tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>

            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>

            <button className="move-button" onClick={() => moveTaskUp(index)}>
              ☝
            </button>

            <button className="move-button" onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
  );
}

export default ToDoItem;