import React from 'react';
import PopUpBtn from './PopUpBtn/PopUpBtn';
import './popUp.css';
import type { LuEvent, LuEvent } from '../../utilities/types/Event';
import { useParams, useNavigate } from 'react-router-dom';
import eventApi from '/../../utilities/api/event.api';
import userApi from '../../utilities/api/user.api';
import { RootState } from '../../utilities/redux/store';
import eventActions from '../../utilities/redux/actions/event.actions';

type props = {
  useCase: string;
  hidePopup: () => void;
  currentEvent: LuEvent
};

function PopUp({ useCase, hidePopup, currentEvent }: props) {
  // const params = useParams();
  // const { eventid } = params;

  // const currentUser = useSelector(
  //   (state: RootState) => state.userReducer.currentUser,
  // );

  // const alteredEvent = {
  //   ...currentEvent,
  //   participants: [...currentEvent!.participants, {
  //     id_user: currentUser!.id_user,
  //     first_name: currentUser!.first_name,
  //     profile_picture: currentUser!.profile_picture,
  //   }],
  // };

  // eventApi.editEvent(alteredEvent! as LuEvent).then((response) => {
  //   dispatch(eventActions.editEventAction(response.data));
  // });

  const joinEvent = () => {

  };

  return (
    <div className="pu__container">
      {useCase === 'signup'
        ? (
          <div>
            <PopUpBtn text="Linkup" hidePopup={hidePopup} joinEvent={joinEvent} />
            <PopUpBtn text="Cancel" hidePopup={hidePopup} />
          </div>
        )
        : (
          <div>
            <PopUpBtn text="No" hidePopup={hidePopup} />
          </div>
        )}
    </div>
  );
}

export default PopUp;
