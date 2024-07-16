import {ListItem} from './ListItem';

export const ListComponent = ({tasks, handleDeleteTask, handleEditTask}) => {
  return (
    <ul className='task__ul'>
      {tasks.map((task) => (
        /* Delete Button & Task Return */
        <ListItem
          key={task.id}
          task={task}
          handleDeleteTask={handleDeleteTask}
          handleEditTask={handleEditTask}
        />
      ))}
    </ul>
  );
};
