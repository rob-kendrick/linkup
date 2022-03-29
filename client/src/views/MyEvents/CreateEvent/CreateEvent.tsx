import React, { useState, useEffect } from 'react';
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
  const [showParticipants, setShowParticipants] = useState(false);
  const [participantsToAdd, setParticipantsToAdd] = useState([]);
  const [location, setLocation] = useState({});

  // keeping track of participants to add for dev purposes
  useEffect(() => {
    console.log(participantsToAdd, 'CREATE EVENT STATE');
  }, [participantsToAdd]);


  const findEventAddress = (inputAddress : any) => {
    console.log(inputAddress);
  };

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

  // conditionally rendering participants list
  const toggleParticipants = () => {
    // set ShowParticipants to true, which conditionally renders user list
    setShowParticipants(!showParticipants);
  };

  const onSubmit = async (formData: LuEvent) => {
    const user = Number(localStorage.getItem('id_user'));
    const fullEvent = formData;
    if (user) {
      try {
        // creating the request body
        fullEvent.participants_to_add = participantsToAdd;
        fullEvent.creator_id = user;
        console.log(fullEvent);
        // Posting the event
        const response = await eventApi.postEvent(fullEvent);
        // If event creation is sucess, redirect to 'my events'
        if (response.data) {
          setTimeout(() => { navigate('/myevents'); }, 2000);
        }
        console.log('AAAAAAAAAAH', response);
        // Error handling
        if (response.error) setNotification('Server error');
        else setNotification('Event successfully created!');
      } catch (err) {
        console.log('ERROR POSTING EVENT :', err);
      }

      // TODO: delete msg when user stored in Redux
    } else setNotification('Could not find user in local storage');
  };

  return (
    <div>
      {/* Conditional rendering + header with back button */}
      <div className={`ce__wrapper ${showParticipants ? 'ce__wrapper_hidden' : ''}`}>
        <HeaderReturn
          text="Create Activity"
        />
        <div className="ce__container">
          <form
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Inputs */}
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
              {/* <MapSmall /> */}
              {/* Rendering text based on participants added */}
            </div>
            <div>
              {participantsToAdd.length > 0
              && (
              <p>
                You selected
                {' '}
                {participantsToAdd.length}
                {' '}
                participants
              </p>
              )}
            </div>

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
              value="Create"
              style="fill"
            />
            {/* Show the user a notification if there is one */}
            {(notification !== '')
          && <p>{notification}</p>}
          </form>
        </div>
      </div>
      {/* Toggling the user list for participant selection */}
      <div>
        {showParticipants === true && (
        <UserList
          toggleParticipants={toggleParticipants}
          setParticipantsToAdd={setParticipantsToAdd}
        />
        )}

      </div>

    </div>
  );
}

export default CreateEvent;
