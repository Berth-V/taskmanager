import "./App.css";
import { LiComponent } from "./components/LiComponent";
import { AddTask } from "./components/AddTask";
import { useHandles } from "./customHooks/useHandles";

function App() {
  const { states, handleNewTask, handleDeleteTask, handleEditTask } =
    useHandles();
  return (
    <>
      <div className="taskmanager">
        <h1 className="taskmanager__h1">Task Manager</h1>
        <AddTask handleNewTask={handleNewTask} />
        <LiComponent
          states={states}
          handleDeleteTask={handleDeleteTask}
          handleEditTask={handleEditTask}
        />
      </div>
    </>
  );
}

export default App;
