import { useRef, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { useForm } from "../customHooks/useForm";

export const DeleteTask = ({ state, handleDeleteTask, handleEditTask }) => {
  const { editedDescription, onInputChange } = useForm({
    editedDescription: state.content,
  });

  const ref = useRef();

  const [disabled, setDisabled] = useState(true);

  const onSubmitEdit = (e) => {
    e.preventDefault();

    const id = state.id;
    const description = editedDescription;

    handleEditTask(id, description);

    setDisabled(!disabled);

    ref.current.focus();
  };

  return (
    <li className="task__li" key={state.id}>
      <form onSubmit={onSubmitEdit}>
        <button
          className="delete__task__btn"
          onClick={() => handleDeleteTask(state.id)}
        >
          <FaRegTrashCan className="delete__icon" />
        </button>
        <button className="edit__btn" type="submit">
          <HiOutlinePencilSquare className="edit__icon" />
        </button>
        <input
          className="task"
          type="text"
          name="editedDescription"
          placeholder="Enter Task"
          value={editedDescription}
          onChange={onInputChange}
          ref={ref}
          readOnly={disabled}
        ></input>
      </form>
    </li>
  );
};
