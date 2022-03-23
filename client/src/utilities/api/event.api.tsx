import type { LuEvent } from '../types/Event';

const baseUrl = process.env.REACT_APP_BASE_URL;

const eventApi = {
  getAllEvents: () => fetch(`${baseUrl}/events`)
    .then((response) => {
      if (response.status < 300) {
        const result = response.json();
        return result;
      }
      throw Error('Server error');
    })
    .catch((e) => {
      console.log(e);
      alert(e);
    }),

  getEventById: (id: number) => fetch(`${baseUrl}/events/${id}`)
    .then((response) => {
      if (response.status < 300) {
        const result = response.json();
        return result;
      }
      throw Error('Server error');
    })
    .catch((e) => {
      console.log(e);
      alert(e);
    }),

  postEvent: (event: LuEvent) => fetch(`${baseUrl}/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  })
    .then((response) => {
      if (response.status < 300) {
        return response.json();
      }
      throw Error('Server error');
    })
    .catch((e) => {
      console.log(e);
      alert(e);
    }),

  editEvent: (event: LuEvent) => fetch(`${baseUrl}/events/${event.id_event}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  })
    .then((response) => {
      if (response.status < 300) {
        return response.json();
      }
      throw Error('Server error');
    })
    .catch((e) => {
      console.log(e);
      alert(e);
    }),

  deleteEvent: (id: number) => fetch(`${baseUrl}/events/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.status < 300) {
        return response.json();
      }
      throw Error('Server error');
    })
    .catch((e) => {
      console.log(e);
      alert(e);
    }),

  joinEvent: (eventId: number, userId: number) => fetch(`${baseUrl}/events/leave/${eventId}/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ eventId, userId }),
  })
    .then((response) => {
      if (response.status < 300) {
        return response.json();
      }
      throw Error('Server error');
    })
    .catch((e) => {
      console.log(e);
      alert(e);
    }),

  leaveEvent: (eventId: number, userId: number) => fetch(`${baseUrl}}/${eventId}/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.status < 300) {
        return response.json();
      }
      throw Error('Server error');
    })
    .catch((e) => {
      console.log(e);
      alert(e);
    }),
};

export default eventApi;
