import { User } from '../utilities/types/User';

const baseUrl = process.env.BASE_URL;

const userApiService = {
  postUser: (user: User) => {
    fetch(baseUrl);
    console.log(user);
  },

  editUser: (user: User) => {},

  deleteUser: (id: number) => {},

  getUserById: (id: number) => {},

  getAllUsers: () => {},

  // addFriend: (userId: number, friendId: number) => {

  // },

  // removeFriend: (id: number, friendId: number) => {

  // },
};
