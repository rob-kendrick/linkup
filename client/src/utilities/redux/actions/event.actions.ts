import { Dispatch } from 'redux';
import { Event } from '../../types/Event';
import { MultipleEventsAction, SingleEventAction } from '../../types/Event.actionTypes';

const eventActions = {
  getEventsAction: (payload: Event[]) => (dispatch: Dispatch<MultipleEventsAction>) => {
    dispatch({ type: 'GET_EVENTS', payload });
  },
  getEventByIdAction: (payload: Event) => (dispatch: Dispatch<SingleEventAction>) => {
    dispatch({ type: 'GET_EVENT_BY_ID', payload });
  },
};

export default eventActions;
