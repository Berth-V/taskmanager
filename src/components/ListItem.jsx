import {FaRegTrashCan} from 'react-icons/fa6';
import {Task} from './Task';

export const ListItem = ({task, handleDeleteTask, handleEditTask}) => {
  return (
    <li className='task__li' key={task.id}>
      {/* Task & Edit Task Component */}
      <Task task={task} handleEditTask={handleEditTask} />
      {/* Delete Button */}
      <button
        className='delete__task__btn'
        onClick={() => handleDeleteTask(task.id)}
      >
        <FaRegTrashCan className='delete__icon' />
      </button>
    </li>
  );
};
