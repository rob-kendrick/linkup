import { User } from '../types/User';

// const baseUrl = process.env.BASE_URL;
const mockServer = 'https://ebea2f79-284c-4f96-b987-399a7c7cef2a.mock.pstmn.io/linkupUsers';

const userApi = {
  postUser: (user: User) => fetch(mockServer, {
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
      alert(e); // destructure to sth, or add some behaviour to the UI element
    }), // error msg is sent from the BE

  getUserById: (id: number) => fetch(`${mockServer}/${id}`)
    .catch()
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

  getAllUsers: () => fetch(mockServer)
    .then((response) => {
      if (response.status < 300) {
        const result = response.json();
        return result;
      }
      throw Error('Server error');
    })
    .catch((e) => {
      console.log(e);
      alert(e); // destructure to sth, or add some behaviour to the UI element
    }), // error msg is sent from the BE

  // addFriend: (userId: number, friendId: number) => {},

  // removeFriend: (id: number, friendId: number) => {},
};

export default userApi;
