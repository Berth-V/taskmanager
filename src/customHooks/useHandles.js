import { useEffect, useReducer } from "react";
import { todoReducer } from "../todoReducer";

export const useHandles = () => {
  const initialState = [];

  const init = () => {
    return JSON.parse(localStorage.getItem("states")) || [];
  };

  const [states, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("states", JSON.stringify(states));
  });

  const handleNewTask = (newTask) => {
    const action = {
      type: "add",
      payload: newTask,
    };
    dispatch(action);
  };

  const handleDeleteTask = (id) => {
    const action = {
      type: "delete",
      payload: id,
    };
    dispatch(action);
  };

  const handleEditTask = (id, description) => {
    const action = {
      type: "edite",
      payload: {
        id,
        description,
      },
    };
    dispatch(action);
  };

  return {
    states,
    handleNewTask,
    handleDeleteTask,
    handleEditTask,
  };
};
