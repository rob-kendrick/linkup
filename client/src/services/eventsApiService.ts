import { Event } from '../utilities/types/Event';

const baseUrl = process.env.BASE_URL;

const eventsApiService = {
  getAllEvents: () => {},
  getEventById: (id: number) => {},
  postEvent: (event: Event) => {},
  editEvent: (event: Event) => {},
  deleteEvent: (id: number) => {},
  joinEvent: (eventId: number, userId: number) => {},
  leaveEvent: (eventId: number, userId: number) => {},
};
