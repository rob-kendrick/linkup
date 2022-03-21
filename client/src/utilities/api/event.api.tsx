// import { Event } from '../types/Event';
// export default {};

// const baseUrl = process.env.BASE_URL;

const mockServer = 'https://ebea2f79-284c-4f96-b987-399a7c7cef2a.mock.pstmn.io/linkupEvents';
const eventApi = {
  getAllEvents: () => fetch(mockServer)
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
      alert(e); // destructure to sth, or add some behaviour to the UI element
    }), // error msg is sent from the BE

  // getEventById: (id: number) => { },
  // postEvent: (event: Event) => { },
  // editEvent: (event: Event) => { },
  // deleteEvent: (id: number) => { },
  // joinEvent: (eventId: number, userId: number) => { },
  // leaveEvent: (eventId: number, userId: number) => { },
};

export default eventApi;
