export default function TaskList(tasks, onChangeTask, onDeleteTask) {
  return tasks.map((task) => {
    return (
      <div>
        <input type="checkbox" />
        {task.text}
        <button onClick={() => onChangeTask()}>Edit</button>
        <button onClick={() => onDeleteTask()}>Delete</button>
      </div>
    );
  });
}
