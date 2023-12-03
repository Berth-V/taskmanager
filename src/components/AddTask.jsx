import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

export const AddTask = ({ handleNewTask }) => {
  const [text, setText] = useState();

  const onAddSubmit = (e) => {
    e.preventDefault();
    let newTask = { id: Date.now(), content: text };
    handleNewTask(newTask);
    setText("");
  };

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form className="input__box" onSubmit={onAddSubmit}>
      <input
        className="input"
        name="myInput"
        placeholder="Enter Task"
        value={text}
        onChange={onInputChange}
      />
      <button className="add__task__btn" type="submit">
        <FaPlus className="add__icon" />
      </button>
    </form>
  );
};
