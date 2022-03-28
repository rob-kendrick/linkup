import { User } from '../types/User';

const baseUrl = process.env.REACT_APP_BASE_URL!;

const userApi = {

  getAllUsers: () => fetch(`${baseUrl}/users/`)
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

  getUserById: (id: number) => fetch(`${baseUrl}/users/${id}`)
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

  postUser: (user: User) => fetch(`${baseUrl}/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
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

  getUserCreatedEvents: (id: number) => fetch(`${baseUrl}/users/${id}/events/created`)
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

  getUserParticipatingEvents: (id: number) => fetch(`${baseUrl}/users/${id}/events/participating`)
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

export default userApi;
