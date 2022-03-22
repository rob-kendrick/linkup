import { Event } from './Event';

export type CurrentEventState = {
  event: Event;
};

export type EventsState = {
    currentEvent: Event | null,
    allEvents: Event[];
};

export type SingleEventAction = {
  type: string;
  payload: Event;
};

export type MultipleEventsAction = {
  type: string;
  payload: Event[];
};

export type EventActions = SingleEventAction | MultipleEventsAction;
