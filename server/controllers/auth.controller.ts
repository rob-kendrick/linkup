import { Request, Response } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import prisma from '../db';

const bcrypt = require('bcrypt');

const SALT_NUMBER: number = Number(process.env.SALT_NUMBER) || 10;
const JWT_SECRET_KEY: Secret = process.env.JWT_SECRET_KEY || 'open sesame';

interface User {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  profile_picture?: string;
  bio: string;
}

// Helper function for validating user info before submitting to DB
const validateUserInfo = (user: User) => {
  if (
    !user.email
    || !user.password
    || !user.first_name
    || !user.last_name
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

    const email = req.body.email.toLowerCase();

    // Check if user already exists in DB
    const emailExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (emailExists) {
      return res.status(409).send({ error: 'email already exists' });
    }
    if (req.body.password === '') throw new Error('Password cannot be empty string');

    // Hash password
    const salt = await bcrypt.genSalt(SALT_NUMBER);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Adding hashed password to our user object
    const body = {
      ...req.body,
      email,
      password: hashedPassword,
    };

    // Creating the user in database
    const newUser = await prisma.user.create({ data: { ...body } });
    const { id_user } = newUser;
    const accessToken = jwt.sign({ id_user }, JWT_SECRET_KEY);

    return res.status(201).send({ data: { accessToken, user: newUser } });
  } catch (err) {
    return res.status(500).send(err);
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const validUser = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    });
    if (!validUser) {
      return res.status(400).send({ error: 'Wrong Email or password' });
    }
    if (req.body.password === '') throw new Error('Password cannot be empty string');

    const validPassword = await bcrypt.compare(
      req.body.password,
      validUser.password,
    );

    if (!validPassword) {
      return res.status(400).send({ error: 'Wrong email or Password' });
    }

    const { id_user } = validUser;
    const accessToken = jwt.sign({ id_user }, JWT_SECRET_KEY);

    return res.send({
      data: {
        accessToken,
        user: {
          id_user,
        },
      },
    });
  } catch (err) {
    return res.status(500).send(err);
  }
};

export default {
  createUser,
  login,
  // logout,
};
