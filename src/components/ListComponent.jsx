import { ListItem } from "./ListItem";

export const ListComponent = ({ states, handleDeleteTask, handleEditTask }) => {
  return (
    <ul className="task__ul">
      {states.map((state) => (
        /* Delete Button & Task Return */
        <ListItem
          key={state.id}
          state={state}
          handleDeleteTask={handleDeleteTask}
          handleEditTask={handleEditTask}
        />
      ))}
    </ul>
  );
};
