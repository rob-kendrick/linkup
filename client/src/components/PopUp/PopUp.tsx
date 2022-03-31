import React, { useEffect, useState } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import eventApi from '../../utilities/api/event.api';
import eventActions from '../../utilities/redux/actions/event.actions';
import PopUpBtn from './PopUpBtn/PopUpBtn';
import './popUp.css';
import type { LuEvent } from '../../utilities/types/Event';
import EventField from '../EventField/EventField';
import userApi from '../../utilities/api/user.api';
import { User } from '../../utilities/types/User';

type props = {
  useCase: string;
  setShowPopup: Function;
  currentEvent: LuEvent;
  navigation?: any;
};

function PopUp({
  useCase, setShowPopup, currentEvent, navigation,
}: props) {
  const navigate = useNavigate();

  const dispatch: Dispatch<any> = useDispatch();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  useEffect(() => {
    const userId = Number(localStorage.getItem('id_user'));
    userApi.getUserById(userId)
      .then((response) => setCurrentUser(response.data))
      .catch();
  }, []);

  const navigator = () => {
    console.log(navigation);
    navigate(navigation);
  };

  if (useCase === 'confirm') {
    return (
      <div className="pu__container">
        <div className="pu__cardContainer">
          <div className="pu__btnTxtContainer">
            <h3 className="pu__hMed">Activity successfully created!</h3>
            <p className="pu__pMed">Return to My Activities</p>
          </div>
          <div className="pu__single_btnContainer">
            <PopUpBtn text="Ok" setShowPopup={setShowPopup} onClick={navigator} />
          </div>
        </div>
      </div>
    );
  }

  if (currentUser && currentEvent) {
    const eventWithAddedParticipant = {
      ...currentEvent,
      participants: [...currentEvent!.participants, {
        id_user: currentUser!.id_user,
        first_name: currentUser!.first_name,
        profile_picture: currentUser!.profile_picture,
      }],
    };

    const eventWithRemovedParticipant = {
      ...currentEvent,
      participants: [...currentEvent!.participants.filter(
        (participant) => participant.id_user !== currentUser?.id_user,
      )],
    };

    const joinEvent = () => {
      eventApi.joinEvent(eventWithAddedParticipant.id_event, currentUser!.id_user).then(() => {
        dispatch(eventActions.editEventAction(eventWithAddedParticipant));
      });
    };

    const leaveEvent = () => {
      eventApi.leaveEvent(eventWithAddedParticipant.id_event, currentUser!.id_user).then(() => {
        dispatch(eventActions.editEventAction(eventWithRemovedParticipant));
      });
    };

    const cancelEvent = () => {
      console.log('delete event');
      eventApi.deleteEvent(eventWithAddedParticipant.id_event).then(() => navigate('/myevents'));
    };

    if (useCase === 'signup') {
      return (
        <div className="pu__container">
          <div className="pu__cardContainer">
            <div className="pu__mainContainer">
              <div className="pu__btnTxtContainer">
                <h5 className="pu__hLight">LinkUp Confirmation</h5>
                <h3 className="pu__hMed">{currentEvent.title}</h3>
              </div>
              <div className="pu__fieldContainer">
                <EventField currentEvent={currentEvent} text="Location" />
                <EventField currentEvent={currentEvent} text="Date" />
                <EventField currentEvent={currentEvent} text="Host" />
              </div>
            </div>
            <div className="pu__btnContainer">
              <PopUpBtn text="Linkup" setShowPopup={setShowPopup} onClick={joinEvent} />
              <PopUpBtn text="Cancel" setShowPopup={setShowPopup} />
            </div>
          </div>
        </div>
      );
    }

    if (useCase === 'leave') {
      return (
        <div className="pu__container">
          <div className="pu__cardContainer">
            <div className="pu__btnTxtContainer">
              <h3 className="pu__hMed">Are you sure?</h3>
              <p className="pu__pMed">Do you really want to leave the activity?</p>
            </div>
            <div className="pu__btnContainer">
              <PopUpBtn text="Yes, leave" setShowPopup={setShowPopup} onClick={leaveEvent} />
              <PopUpBtn text="No" setShowPopup={setShowPopup} />
            </div>
          </div>
        </div>
      );
    }
    if (useCase === 'cancel') {
      return (
        <div className="pu__container">
          <div className="pu__cardContainer">
            <div className="pu__btnTxtContainer">
              <h3 className="pu__hMed">Are you sure?</h3>
              <p className="pu__pMed">Do you really want to cancel the activity?</p>
            </div>
            <div className="pu__btnContainer">
              <PopUpBtn text="Yes, Cancel" setShowPopup={setShowPopup} onClick={cancelEvent} />
              <PopUpBtn text="No" setShowPopup={setShowPopup} />
            </div>
          </div>
        </div>
      );
    }
  }
  return (<div />);
}

export default PopUp;
