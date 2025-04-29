import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { FaUndo } from "react-icons/fa";
import { MdFileDownloadDone } from "react-icons/md";

function ToDoItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.task.text);

  function handleEditSubmit() {
    props.onEdited(props.task.id, editedText);
    setIsEditing(false);
  }

  return (
    <li className="todo-item"
      style={{ textDecoration: props.task.completed ? "line-through" : "none" }}
    >
      {isEditing ? (
        <div className="item">
          <input
            className="todo-input"
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button className="add-button" onClick={handleEditSubmit}>
            Save
          </button>
        </div>
      ) : (
        <div className="item">
          <p className="item-text">{props.task.text}</p>
          {/* Show Complete/Undo button */}
          <button
            className="item-complete"
            onClick={() => props.onCompleted(props.task.id)}
          >
            {props.task.completed ? <FaUndo /> : <MdFileDownloadDone />}
          </button>
          {/* Conditionally render the Edit button */}
          {!props.task.completed && (
            <button className="item-edit" onClick={() => setIsEditing(true)}>
              <MdEditSquare />
            </button>
          )}
          {/* Show Delete button */}
          <button
            className="item-delete"
            onClick={() => props.onDeleted(props.task.id)}
          >
            <MdDeleteForever />
          </button>
        </div>
      )}
    </li>
  );
}
export default ToDoItem;
