import { LuEvent } from '../../types/Event';

import type {
  EventsState, EventActions,
} from '../../types/Event.actionTypes';

const initialState: EventsState = {
  currentEvent: null,
  allEvents: [],
};

const eventReducer = (
  // eslint-disable-next-line default-param-last
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
      return {
        ...state,
        allEvents: [...state.allEvents],
      } as EventsState;
    case 'DELETE_EVENT':
      // eslint-disable-next-line no-case-declarations
      const newEvent = action.payload as LuEvent;
      // eslint-disable-next-line no-case-declarations
      const filterdEvents = [...state.allEvents]
        .filter((event) => event.eventId !== newEvent.eventId);
      return {
        ...state,
        allEvents: filterdEvents,
      } as EventsState;
    default:
      return state;
  }
};

export default eventReducer;
