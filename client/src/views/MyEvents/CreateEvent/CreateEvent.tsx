import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ButtonLarge from '../../../components/Form/ButtonLarge/ButtonLarge';
import { InputTextField, InputTextArea } from '../../../components/Form/InputTextField/InputTextField';
import HeaderReturn from '../../../components/HeaderReturn/HeaderReturn';
import { LuEvent } from '../../../utilities/types/Event';
import eventApi from '../../../utilities/api/event.api';
import './CreateEvent.css';
import UserList from '../../../components/SelectUsers/UserList/UserList';
import MapCreate from '../../../components/MapCreate/MapCreate';

function CreateEvent() {
  const navigate = useNavigate();
  const [notification, setNotification] = useState('');
  const [participantsOverlay, setParticipantsOverlay] = useState(false);
  const [participantsToAdd, setParticipantsToAdd] = useState([]);
  const [location, setLocation] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LuEvent>({
    defaultValues: {
      title: '',
      date: '',
      description: '',
    },
  });

  const onSubmit = async (formData: LuEvent) => {
    if (location === null) {
      setNotification('Set a location fo your activity.');
    } else {
      const newEvent = formData;
      newEvent.creator_id = Number(localStorage.getItem('id_user'));
      newEvent.participants_to_add = participantsToAdd;
      Object.assign(newEvent, location);
      const response = await eventApi.postEvent(newEvent);
      if (response.data) {
        setTimeout(() => { navigate('/myevents'); }, 2000);
      }
      if (response.error) setNotification('Server error');
      else setNotification('Event successfully created!');
    }
  };

  return (
    <div>
      <div className={`ce__wrapper ${participantsOverlay ? 'ce__wrapper_hidden' : ''}`}>
        <HeaderReturn
          text="Create Activity"
        />
        <div className="ce__container">
          <form
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputTextField
              type="text"
              label="Title"
              errorMessage={errors.title?.message}
              {...register('title', {
                required: 'This field is required',
                onChange: () => {
                  setNotification('');
                },
              })}
            />
            <InputTextField
              type="datetime-local"
              label="Date and time"
              errorMessage={errors.date?.message}
              {...register('date', {
                required: 'This field is required',
                onChange: () => {
                  setNotification('');
                },
              })}
            />
            <InputTextArea
              type="text"
              label="Description"
              errorMessage={errors.description?.message}
              rows={3}
              {...register('description', {
                required: 'This field is required',
                onChange: () => {
                  setNotification('');
                },
              })}
            />
            <div className="ce__map-container">
              <MapCreate setLocation={setLocation} />
              {/* Rendering text based on participants added */}
            </div>
            <div>
              {participantsToAdd.length > 0
              && (
              <text>
                You selected
                {' '}
                {participantsToAdd.length}
                {' '}
                participants
              </text>
              )}
              <br />
              {(notification !== '')
            && <text>{notification}</text>}
            </div>
            <div onClick={() => setParticipantsOverlay(!participantsOverlay)}>
              <ButtonLarge
                type="button"
                value="Add Participants"
                style="black"
              />
            </div>
            <ButtonLarge
              type="submit"
              value="Create"
              style="fill"
            />
          </form>
        </div>
      </div>
      <div>
        {participantsOverlay === true && (
        <UserList
          toggleParticipants={() => setParticipantsOverlay(!participantsOverlay)}
          setParticipantsToAdd={setParticipantsToAdd}
        />
        )}
      </div>
    </div>
  );
}

export default CreateEvent;
