/* eslint-disable no-param-reassign */
/* eslint-disable default-param-last */
/* eslint-disable no-case-declarations */
import { LuEvent } from '../../types/Event';

import type {
  EventsState, EventActions,
} from '../../types/Event.actionTypes';

const initialState: EventsState = {
  currentEvent: null,
  allEvents: [],
};

const eventReducer = (
  state = initialState,
  action: EventActions,
):EventsState => {
  switch (action.type) {
    case 'GET_EVENTS':
      return {
        ...state,
        allEvents: action.payload,
      } as EventsState;
    case 'GET_EVENT_BY_ID':
      return {
        ...state,
        currentEvent: action.payload,
      } as EventsState;
    case 'POST_EVENT':
      return {
        ...state,
        allEvents: [...state.allEvents, action.payload],
      } as EventsState;
    case 'EDIT_EVENT':
      const newEvent = action.payload as LuEvent;
      return {
        ...state,
        allEvents: [...state.allEvents].map((event) => {
          if (event.id_event === newEvent.id_event) {
            event = newEvent;
          }
          return event;
        }),
      } as EventsState;
    case 'DELETE_EVENT':
      // let newEvent = action.payload as LuEvent;
      const filterdEvents = [...state.allEvents]
        .filter((event) => event.id_event !== newEvent.id_event);
      return {
        ...state,
        allEvents: filterdEvents,
      } as EventsState;
    default:
      return state;
  }
};

export default eventReducer;
