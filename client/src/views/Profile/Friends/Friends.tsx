// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import FriendsList from './FriendsList/FriendsList';
import './Friends.css';

function Friends() {
  // const {
  //   register, handleSubmit, watch, formState: { errors },
  // } = useForm();
  // const onSubmit = (data: {[x: string]:any}) => console.log(data);
  // console.log(watch('search'));
  return (
    <div>
      <FriendsList />
    </div>
  );
}

export default Friends;
