import { User } from '../types/User';

const baseUrl = process.env.REACT_APP_BASE_URL!;

const authApi = {

  login: (user: User) => fetch(`${baseUrl}/auth/login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
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

  register: (user: User) => fetch(`${baseUrl}/create/`, {
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

  // TODO: logout
};

export default authApi;
