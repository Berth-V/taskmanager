import {FaPlus} from 'react-icons/fa6';
import {useForm} from '../customHooks/useForm';

export const AddTask = ({handleNewTask}) => {
  const {description, onInputChange, onResetForm} = useForm({
    description: '',
  });

  const onAddSubmit = (e) => {
    e.preventDefault();

    if (description.length <= 1) return;

    let newTask = {id: new Date().getTime(), description: description};

    handleNewTask(newTask);
    onResetForm();
  };

  return (
    <form className='add__task__form' onSubmit={onAddSubmit}>
      <input
        className='add__task__input'
        name='description'
        placeholder='Enter Task'
        value={description}
        onChange={onInputChange}
      />
      <button className='add__task__btn' type='submit'>
        <FaPlus className='add__icon' />
      </button>
    </form>
  );
};
