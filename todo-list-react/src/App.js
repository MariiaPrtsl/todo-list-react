import { useState } from "react";
import CustomForm from "./components/CustomForm";
import TaskList from "./components/TaskList";
import EditForm from "./components/EditForm"
function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };
  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((t) => t.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };
  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      <EditForm
      editedTask={editedTask}
      updateTask={updateTask}/>
      <CustomForm addTask={addTask} />
      {tasks && <TaskList 
      tasks={tasks} 
      deleteTask={deleteTask} 
      toggleTask={toggleTask}/>}
    </div>
  );
}

export default App;
