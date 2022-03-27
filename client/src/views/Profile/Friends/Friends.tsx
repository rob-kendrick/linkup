import React from 'react';
import { useForm } from 'react-hook-form';
import HeaderReturn from '../../../components/HeaderReturn/HeaderReturn';
import FriendsList from './FriendsList/FriendsList';
import { InputTextField } from '../../../components/Form/InputTextField/InputTextField';
import './Friends.css';

function Friends() {
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm();
  const onSubmit = (data: {[x: string]:any}) => console.log(data);
  console.log(watch('search'));
  return (
    <div>
      <HeaderReturn
        text="Friends"
      />
      <div className="f__container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputTextField
            type="text"
            label="Search"
            errorMessage={errors.first_name?.message}
            {...register('search', { required: 'This field is required' })}
          />
        </form>
      </div>
      <FriendsList />
    </div>
  );
}

export default Friends;
