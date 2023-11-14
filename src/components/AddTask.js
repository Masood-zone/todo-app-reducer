export default function AddTask(onAddTask) {
  return (
    <div>
      <input placeholder="Add Task" />
      <button onClick={() => onAddTask()}>Add</button>
    </div>
  );
}
