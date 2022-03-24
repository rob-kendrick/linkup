import type { LuEvent } from './Event';

export type CurrentEventState = {
  event: LuEvent;
};

export type EventsState = {
    currentEvent: LuEvent | null,
    allEvents: LuEvent[];
};

export type SingleEventAction = {
  type: string;
  payload: LuEvent;
};

export type MultipleEventsAction = {
  type: string;
  payload: LuEvent[];
};

export type EventActions = SingleEventAction | MultipleEventsAction;
