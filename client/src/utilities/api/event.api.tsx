import type { LuEvent } from '../types/Event';
// export default {};

// const baseUrl = process.env.BASE_URL;

const mockServer = 'https://ebea2f79-284c-4f96-b987-399a7c7cef2a.mock.pstmn.io/linkupEvents';
const eventApi = {
  getAllEvents: () => fetch(`${mockServer}/events`)
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

  getEventById: (id: number) => fetch(`${mockServer}/events/${id}`)
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

  postEvent: (event: LuEvent) => fetch(`${mockServer}/events`, {
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

  editEvent: (event: LuEvent) => fetch(`${mockServer}/events/${event.eventId}`, {
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

  deleteEvent: (id: number) => fetch(`${mockServer}/events/${id}`, {
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

  joinEvent: (eventId: number, userId: number) => fetch(`mockServer/events/leave/${eventId}/${userId}`, {
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

  leaveEvent: (eventId: number, userId: number) => fetch(`mockServer/${eventId}/${userId}`, {
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
