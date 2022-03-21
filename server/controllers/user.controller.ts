// Below is some boilerplate data which will be changed once DB and models are there
// LEGEND :
// 🚀🚀🚀 = New section
// ✅ = To be included in MVP
// 🅱️ = Expect request body
// 🅿️ = Expect Params (eg. Id)
// --------------------------------------------------------
// IMPORTS
import { Request, Response } from 'express';
import prisma from '../db';

const bcrypt = require('bcrypt');
// --------------------------------------------------------

// Defining user Type for TS
interface User {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  profile_picture: string;
  bio: string;
}

// Validating user info before passing to DB
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

//---------------------------------------------------------
// 🚀🚀🚀 LOGIN CONTROLLERS 🚀🚀🚀
// --------------------------------------------------------

// Login 🅱️ ✅
const login = async (req: Request, res: Response) => {
  try {

  } catch (err) {

  }
};

// Logout ✅
const logout = (req: Request, res: Response) => {
  try {

  } catch (err) {

  }
};

// --------------------------------------------------------
// 🚀🚀🚀 USER CONTROLLERS 🚀🚀🚀
// --------------------------------------------------------

// Create 1 user 🅱️ ✅
const createUser = async (req: Request, res: Response) => {
  // need to send JWToken / session cookie ?
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

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    // Adding hashed password to our user object
    const body = {
      password: hashedPassword,
      ...req.body,
    };

    // Creating the user in database
    const newUser = await prisma.user.create({ data: { ...body } });
    // console.log(newUser);
    res.status(201).send(newUser);
  } catch (err) {
    console.log(' : : : ERROR STORING USER IN DATBASE : : : ', err);
    res.status(500).send(err);
  }
};

// Get 1 user by ID 🅿️ ✅
const getUserById = async (req: Request, res: Response) => {
  try {

  } catch (err) {

  }
};

// Get all users
const getAllUsers = async (req: Request, res: Response) => {
  try {

  } catch (err) {

  }
};

// Edit 1 user by ID 🅱️ 🅿️
const editUser = async (req: Request, res: Response) => {
  try {

  } catch (err) {

  }
};

// Delete 1 user by ID 🅿️
const deleteUser = async (req: Request, res: Response) => {
  try {

  } catch (err) {

  }
};

// Add friend 🅿️
// async function to be added !

// Remove friend 🅿️
// async function to be added !

// --------------------------------------------------------
// 🚀🚀🚀 EXPORTS 🚀🚀🚀
export default {
  createUser, getUserById, getAllUsers, editUser, login, logout, deleteUser,
};
// --------------------------------------------------------
