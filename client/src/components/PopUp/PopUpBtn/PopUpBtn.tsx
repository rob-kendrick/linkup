/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import eventApi from '../../../utilities/api/event.api';
import userApi from '../../../utilities/api/user.api';
import { RootState } from '../../../utilities/redux/store';
import type { LuEvent } from '../../../utilities/types/Event';
import eventActions from '../../../utilities/redux/actions/event.actions';

type Props = {
  text: string;
  hidePopup: () => void;
  // eslint-disable-next-line react/require-default-props
  joinEvent?: () => void;
}

function PopUpBtn({ text, hidePopup, joinEvent }: Props) {
  const dispatch: Dispatch<any> = useDispatch();

  if (text === 'Linkup') {
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

    <div>
      <button type="button" onClick={() => { hidePopup(); joinEvent!(); }}>
        {' '}
        {text}
        {' '}
      </button>
    </div>;
  }

  return (
    <div>
      <button type="button" onClick={() => { hidePopup(); }}>
        {' '}
        {text}
        {' '}
      </button>
    </div>

  );
}

export default PopUpBtn;
