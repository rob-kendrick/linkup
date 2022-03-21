import { MultipleEventsAction, EventsState } from '../../types/Event.actionTypes';

const initialState: EventsState = {
  users: [],
};

// eslint-disable-next-line default-param-last
const eventReducer = (state = initialState, action: MultipleEventsAction) => {
  switch (action.type) {
    case 'GET_EVENTS':
      return {
        ...state,
        events: action.payload,
      };
    default:
      return state;
  }
};

export default eventReducer;
