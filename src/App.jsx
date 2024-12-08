import { createRoot } from "react-dom/client";
import ToDoList from "./ToDoList.jsx";

function App() {
  return <ToDoList />;
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);