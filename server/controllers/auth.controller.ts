/* eslint-disable camelcase */
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
import prisma from '../db';

const bcrypt = require('bcrypt');

const SECRET_KEY = process.env.SECRET_KEY || 'open sesame';

//
interface User {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  profile_picture: string;
  bio: string;
}
// Helper function for validating user info before submitting to DB
const validateUserInfo = (user: User) => {
  if (
    !user.email
    || !user.password
    || !user.first_name
    || !user.last_name
    || !user.profile_picture
    || !user.bio
  ) return false;
  return true;
};

const createUser = async (req: Request, res: Response) => {
  try {
    //  check if input is valid
    if (!validateUserInfo(req.body)) {
      return res.status(400).send({ error: 'Invalid user data' });
    }

    // Check if user already exists in DB
    const emailExists = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    });
    if (emailExists) {
      return res.status(409).send({ error: 'email already exists' });
    }
    if (req.body.password === '') throw new Error('Password cannot be empty string');
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    // Adding hashed password to our user object
    const body = {
      ...req.body,
      password: hashedPassword,
    };

    // Creating the user in database
    const newUser = await prisma.user.create({ data: { ...body } });
    const { id_user } = newUser;
    const accessToken = jwt.sign({ id_user }, SECRET_KEY);
    // console.log(newUser);
    res.status(201).send({ data: { accessToken, newUser } });
  } catch (err) {
    console.log(' : : : ERROR STORING USER IN DATBASE : : : ', err);
    res.status(500).send(err);
  }
};

const login = async (req: Request, res: Response) => {};
//   try {
//     const validUser = await prisma.user.findUnique({
//       where: {
//         email: req.body.email,
//       },
//     });
//     if (!validUser) {
//       return res.status(400).send({ error: 'Wrong email or password' });
//     }
//     if (req.body.password === '') throw new Error('Password cannot be empty string');

//     const validPassword = await bcrypt.compare(
//       req.body.password,
//       validUser.password,
//     );

//     if (!validPassword) {
//       return res.status(400).send({ error: 'Wrong email or password' });
//     }

//     // Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(req.body.password, salt);
//     // Adding hashed password to our user object
//     const body = {
//       ...req.body,
//       password: hashedPassword,
//     };

//   } catch (err) {
//     console.log(' : : : ERROR STORING USER IN DATBASE : : : ', err);
//     res.status(500).send(err);
//   }
// }

// const logout = async (req: Request, res: Response) => {
//   try {

//   } catch (err) {
//     console.log(' : : : ERROR STORING USER IN DATBASE : : : ', err);
//     res.status(500).send(err);
//   }
// }

export default {
  createUser,
  login,
  // logout,
};
