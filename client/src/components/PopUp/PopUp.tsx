import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import eventApi from '../../utilities/api/event.api';
import { RootState } from '../../utilities/redux/store';
import eventActions from '../../utilities/redux/actions/event.actions';
import PopUpBtn from './PopUpBtn/PopUpBtn';
import './popUp.css';
import type { LuEvent } from '../../utilities/types/Event';

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
          <div>
            <PopUpBtn text="Linkup" hidePopup={hidePopup} onClick={joinEvent} />
            <PopUpBtn text="Cancel" hidePopup={hidePopup} />
          </div>
        )
        : (
          <div>
            <PopUpBtn text="Yes, Cancel" hidePopup={hidePopup} onClick={leaveEvent} />
            <PopUpBtn text="No" hidePopup={hidePopup} />
          </div>
        )}
    </div>
  );
}

export default PopUp;
