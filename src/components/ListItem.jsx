import { FaRegTrashCan } from "react-icons/fa6";
import { Task } from "./Task";

export const ListItem = ({ state, handleDeleteTask, handleEditTask }) => {
  return (
    <li className="task__li" key={state.id}>
      {/* Task & Edit Task Component */}
      <Task state={state} handleEditTask={handleEditTask} />
      {/* Delete Button */}
      <button
        className="delete__task__btn"
        onClick={() => handleDeleteTask(state.id)}
      >
        <FaRegTrashCan className="delete__icon" />
      </button>
    </li>
  );
};
