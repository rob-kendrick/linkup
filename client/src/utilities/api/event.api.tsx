import type { LuEvent } from '../types/Event';

const baseUrl = process.env.REACT_APP_BASE_URL;

const eventApi = {
  getAllEvents: () => fetch(`${baseUrl}/events`)
    .then((response) => {
      if (response.status < 300) {
        const result = response.json();
        console.log('API', result);
        return result;
      }
      throw Error('Server error');
    })
    .catch((e) => {
      console.log(e);
      return { error: true, message: e.message, code: e.code };
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
      return { error: true, message: e.message, code: e.code };
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
      return { error: true, message: e.message, code: e.code };
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
        const result = response.json();
        console.log('api', result);
        return result;
      }
      throw Error('Server error');
    })
    .catch((e) => {
      console.log(e);
      return { error: true, message: e.message, code: e.code };
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
      return { error: true, message: e.message, code: e.code };
    }),

  joinEvent: (eventId: number, userId: number) => fetch(`${baseUrl}/events/join/${eventId}/users/${userId}`, {
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
      return { error: true, message: e.message, code: e.code };
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
      return { error: true, message: e.message, code: e.code };
    }),
};

export default eventApi;
