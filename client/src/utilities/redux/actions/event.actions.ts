import { Dispatch } from 'redux';
import type { LuEvent } from '../../types/Event';
import { MultipleEventsAction, SingleEventAction } from '../../types/Event.actionTypes';

const eventActions = {
  getEventsAction: (payload: LuEvent[]) => (dispatch: Dispatch<MultipleEventsAction>) => {
    dispatch({ type: 'GET_EVENTS', payload });
  },
  getEventByIdAction: (payload: LuEvent) => (dispatch: Dispatch<SingleEventAction>) => {
    dispatch({ type: 'GET_EVENT_BY_ID', payload });
  },
  postEventAction: (payload: LuEvent) => (dispatch:Dispatch<SingleEventAction>) => {
    dispatch({ type: 'POST_EVENT', payload });
  },
  editEventAction: (payload: LuEvent) => (dispatch:Dispatch<SingleEventAction>) => {
    dispatch({ type: 'EDIT_EVENT', payload });
  },
  deleteEventAction: (payload: LuEvent) => (dispatch:Dispatch<SingleEventAction>) => {
    dispatch({ type: 'DELETE_EVENT', payload });
  },
};

export default eventActions;
