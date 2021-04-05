import TodoService from '../../services/TodoService';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../TodoApp/TodoSlice';
interface IFormInput {
  value: string;
}

const TodoForm = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const { register, handleSubmit, errors } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    const formValues = {
      title: data.value,
    };

    TodoService.addTodo(formValues.title, false)
      .then((todo) => {
        dispatch(addTodo(todo));
      })
      .catch((error) => {
        throw error;
      });

    setValue('');
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)} className="add-items d-flex">
        <input
          value={value}
          onChange={handleValueChange}
          placeholder="What do you need to do today?"
          className="form-control todo-list-input"
          name="value"
          ref={register({
            required: true,
          })}
        />
        <button
          type="submit"
          className="add btn btn-primary font-weight-bold todo-list-add-btn"
        >
          Add
        </button>
      </form>
      {errors.value && (
        <div
          className="alert alert-danger"
          role="alert"
          style={{
            textAlign: 'left',
          }}
        >
          <strong>{errors.value && 'Input form is required'}</strong>
        </div>
      )}
    </React.Fragment>
  );
};

export default TodoForm;
