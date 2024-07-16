import {useRef, useState} from 'react';
import {HiOutlinePencilSquare} from 'react-icons/hi2';
import {useForm} from '../customHooks/useForm';

export const Task = ({task, handleEditTask}) => {
  const {editedDescription, onInputChange} = useForm({
    editedDescription: task.description,
  });

  const ref = useRef();

  const [disabled, setDisabled] = useState(true);

  const onSubmitEdit = (e) => {
    e.preventDefault();

    const id = task.id;
    const description = editedDescription;

    handleEditTask(id, description);

    setDisabled(!disabled);

    ref.current.focus();
  };

  return (
    <form onSubmit={onSubmitEdit} className='task__box'>
      <input
        className='task'
        type='text'
        name='editedDescription'
        placeholder='Enter Task'
        value={editedDescription}
        onChange={onInputChange}
        readOnly={disabled}
        ref={ref}
      ></input>
      <button className='edit__btn' type='submit'>
        <HiOutlinePencilSquare className='edit__icon' />
      </button>
    </form>
  );
};
