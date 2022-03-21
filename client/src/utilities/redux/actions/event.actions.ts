import { Dispatch } from 'redux';
import { Event } from '../../types/Event';
import { MultipleEventsAction } from '../../types/Event.actionTypes';

const eventActions = {
  getEventsAction: (payload: Event[]) => (dispatch: Dispatch<MultipleEventsAction>) => {
    dispatch({ type: 'GET_EVENTS', payload });
  },
};

export default eventActions;
