import {useEffect, useReducer} from 'react';
import {todoReducer} from '../todoReducer';

export const useHandles = () => {
  const initialState = [];

  const init = () => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  };

  const [tasks, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleNewTask = (newTask) => {
    const action = {
      type: 'add',
      payload: newTask,
    };
    dispatch(action);
  };

  const handleDeleteTask = (id) => {
    const action = {
      type: 'delete',
      payload: id,
    };
    dispatch(action);
  };

  const handleEditTask = (id, description) => {
    const action = {
      type: 'edit',
      payload: {
        id,
        description,
      },
    };
    dispatch(action);
  };

  return {
    tasks,
    handleNewTask,
    handleDeleteTask,
    handleEditTask,
  };
};
