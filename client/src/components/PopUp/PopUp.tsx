import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import eventApi from '../../utilities/api/event.api';
import { RootState } from '../../utilities/redux/store';
import eventActions from '../../utilities/redux/actions/event.actions';
import PopUpBtn from './PopUpBtn/PopUpBtn';
import './popUp.css';
import type { LuEvent } from '../../utilities/types/Event';
import PopUpField from './PopUpField/PopUpField';

type props = {
  useCase: string;
  hidePopup: () => void;
  currentEvent: LuEvent
};

function PopUp({ useCase, hidePopup, currentEvent }: props) {
  const dispatch: Dispatch<any> = useDispatch();

  const currentUser = useSelector(
    (state: RootState) => state.userReducer.currentUser,
  );

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
      (participant) => participant.id_user !== currentUser!.id_user,
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

  return (
    <div className="pu__container">
      {useCase === 'signup'
        ? (
          <div className="pu__cardContainer">
            <div className="pu__mainContainer">
              <div className="pu__btnTxtContainer">
                <h5 className="pu__hLight">LinkUp Confirmation</h5>
                <h3 className="pu__hMed">{currentEvent.description}</h3>
              </div>
              <div className="pu__fieldContainer">
                <PopUpField currentEvent={currentEvent} text="Location" />
                <PopUpField currentEvent={currentEvent} text="Date" />
                <PopUpField currentEvent={currentEvent} text="Host" />
              </div>
            </div>
            <div className="pu__btnContainer">
              <PopUpBtn text="Linkup" hidePopup={hidePopup} onClick={joinEvent} />
              <PopUpBtn text="Cancel" hidePopup={hidePopup} />
            </div>
          </div>

        )
        : (
          <div className="pu__cardContainer">
            <div className="pu__btnTxtContainer">
              <h3 className="pu__hMed">Are you sure?</h3>
              <p className="pu__pMed">Do you really want to cancel the activity?</p>
            </div>
            <div className="pu__btnContainer">
              <PopUpBtn text="Yes, Cancel" hidePopup={hidePopup} onClick={leaveEvent} />
              <PopUpBtn text="No" hidePopup={hidePopup} />
            </div>
          </div>
        )}
    </div>
  );
}

export default PopUp;
