import { DeleteTask } from "./DeleteTask";

export const LiComponent = ({ states, handleDeleteTask, handleEditTask }) => {
  return (
    <ul className="task__ul">
      {states.map((state) => (
        /* Delete Button & Task Return */
        <DeleteTask
          key={state.id}
          state={state}
          handleDeleteTask={handleDeleteTask}
          handleEditTask={handleEditTask}
        />
      ))}
    </ul>
  );
};
