import { useState } from "react/cjs/react.production.min";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "./styles.css";
let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const handleAddTask = () => {};
  const handleChangeTask = () => {};
  const handleDeleteTask = () => {};
  return (
    <div className="">
      <h1>Extracting State into a useReducer hook</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
