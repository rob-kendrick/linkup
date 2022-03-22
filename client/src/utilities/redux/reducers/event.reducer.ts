import {
  // MultipleEventsAction,
  EventsState, EventActions,
} from '../../types/Event.actionTypes';

const initialState: EventsState = {
  currentEvent: null,
  allEvents: [],
};

// eslint-disable-next-line default-param-last
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
    default:
      return state;
  }
};

export default eventReducer;
