import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ButtonLarge from '../../../components/Form/ButtonLarge/ButtonLarge';
import { InputTextField, InputTextArea } from '../../../components/Form/InputTextField/InputTextField';
import HeaderReturn from '../../../components/HeaderReturn/HeaderReturn';
import MapSmall from '../../../components/MapSmall/MapSmall';
import { LuEvent } from '../../../utilities/types/Event';
import eventApi from '../../../utilities/api/event.api';
import './CreateEvent.css';
import UserList from '../../../components/SelectUsers/UserList/UserList';

// TODO: delete mockAddress when retrieve lat, lng and adress from map
const mockAddress = {
  lat: 52.520909,
  lng: 13.46896,
  street_number: '16',
  street_name: 'Richard-Ermisch-Straße',
  postcode: '10247',
  city: 'Berlin',
  country: 'Deutschland',
};

function CreateEvent() {
  const [errorMessage, setErrorMessage] = useState('');
  const [showParticipants, setShowParticipants] = useState(false);

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

  const toggleParticipants = () => {
    // set ShowParticipants to true, which conditionally renders user list
    setShowParticipants(!showParticipants);
  };

  const onSubmit = async (formData: LuEvent) => {
    const user = Number(localStorage.getItem('id_user'));
    if (user) {
      const fullEvent = Object.assign(formData, mockAddress);
      fullEvent.creator_id = user;
      const response = await eventApi.postEvent(fullEvent);
      if (response.error) setErrorMessage('Server error');
      else setErrorMessage('Event created!');

      // TODO: delete msg when user stored in Redux
    } else setErrorMessage('Could not find user in local storage');
  };

  return (
    <div>

      <div className={`ce__wrapper ${showParticipants ? 'ce__wrapper_hidden' : ''}`}>
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
                  setErrorMessage('');
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
                  setErrorMessage('');
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
                  setErrorMessage('');
                },
              })}
            />
            <MapSmall />
            {/* Div for conditionally rendering user list */}
            <div onClick={toggleParticipants}>
              <ButtonLarge
                type="button"
                value="Add Participants"
                style="black"
              />
            </div>
            <ButtonLarge
              type="submit"
              value="Link Up"
              style="fill"
            />
            {(errorMessage !== '')
          && <text>{errorMessage}</text>}
          </form>
        </div>
      </div>
      <div>
        {showParticipants === true && (
        <UserList
          toggleParticipants={toggleParticipants}
        />
        )}

      </div>
    </div>
  );
}

export default CreateEvent;
