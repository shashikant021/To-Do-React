import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  const [tasks, setTasks] = useState(() => {
    //load tasks from localStorage
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [newTask, setNewTask] = useState("");

  //save to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask() {
    if (newTask === "") {
      alert("List cannot be empty !");
      return;
    }
    if (newTask.length < 5) {
      alert("List text should be at least 5 characters long !");
      return;
    }

    if (newTask.trim()) {
      const newItem = {
        id: Date.now(),
        text: newTask,
        completed: false,
      };
      setTasks([...tasks, newItem]);
      setNewTask("");
    }
    // console.log(tasks);
  }

  function handleDeleteTask(id) {
    // Logic to handle task deletion
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handleCompleteTask(id) {
    // Logic to handle task completion
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleEditTask(id, updatedText) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: updatedText } : task
      )
    );
  }

  return (
    <>
      <Header />
      <div className="todo-add">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="todo-input"
          type="text"
          placeholder="Write Your text here..."
        />
        <button onClick={addTask} className="add-button">
          Add
        </button>
      </div>
      <ToDoList
        tasks={tasks}
        onComplete={handleCompleteTask}
        onDelete={handleDeleteTask}
        onEdit={handleEditTask}
      />
    </>
  );
}

export default App;
