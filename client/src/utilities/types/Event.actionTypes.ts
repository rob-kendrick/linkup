import { Event } from './Event';

export type CurrentEventState = {
  user: Event;
};

export type EventsState = {
  users: Event[];
};

export type SingleEventAction = {
  type: string;
  payload: Event;
};

export type MultipleEventsAction = {
  type: string;
  payload: Event[];
};
