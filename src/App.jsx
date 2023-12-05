import "./App.css";
import { useHandles } from "./customHooks/useHandles";
import { AddTask } from "./components/AddTask";
import { ListComponent } from "./components/ListComponent";

function App() {
  const { states, handleNewTask, handleDeleteTask, handleEditTask } =
    useHandles();
  return (
    <>
      <div className="taskmanager">
        <h1 className="taskmanager__h1">Task Manager</h1>
        <AddTask handleNewTask={handleNewTask} />
        <ListComponent
          states={states}
          handleDeleteTask={handleDeleteTask}
          handleEditTask={handleEditTask}
        />
      </div>
    </>
  );
}

export default App;
