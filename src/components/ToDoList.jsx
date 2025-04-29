import ToDoItem from "./ToDoItem";

function ToDoList(props) {
  return (
    <>
      <ul className="todo-list">
        {props.tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            onCompleted={props.onComplete}
            onDeleted={props.onDelete}
            onEdited={props.onEdit}
          />
        ))}
      </ul>
    </>
  );
}
export default ToDoList;
