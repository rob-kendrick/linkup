// Below is some boilerplate data which will be changed once DB and models are there
// LEGEND :
// 🚀🚀🚀 = New section
// ✅ = To be included in MVP
// 🅱️ = Expect request body
// 🅿️ = Expect Params (eg. Id)
// --------------------------------------------------------
// IMPORTS
import { Request, Response } from 'express'; // Types for Typescript
// ORM handling
import jwt from 'jsonwebtoken';
import prisma from '../db';

const bcrypt = require('bcrypt');
// --------------------------------------------------------
const SECRET_KEY = process.env.SECRET_KEY || 'open sesame';
//---------------------------------------------------------
// 🚀🚀🚀 AUTH CONTROLLERS 🚀🚀🚀
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

// Reset password 🅱️
const resetPassword = (req: Request, res: Response) => {
  try {

  } catch (err) {

  }
};

// --------------------------------------------------------
// 🚀🚀🚀 USER CONTROLLERS 🚀🚀🚀
// --------------------------------------------------------
// # CREATE USER

// Defining user Type for Typescript
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

// --------------------------------------------------------
// --------------------------------------------------------

// # Get 1 user by ID 🅿️ ✅
const getUserById = async (req: Request, res: Response) => {
  try {
    // Parsing userid param into number. If not parsed, will error
    const uid: number = Number(req.params.userid);
    // Finding the user in DB
    const foundUser = await prisma.user.findUnique({
      where: {
        id_user: uid,
      },
    });
    // Returning the found user
    res.status(200).send(foundUser);
  } catch (err) {
    console.log(': : : ERROR FINDING USER BY ID : : : ', err);
    res.status(404).send(err);
  }
};

// --------------------------------------------------------
// --------------------------------------------------------

// Get all users
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await prisma.user.findMany();
    res.status(200).send({ data: allUsers });
  } catch (err) {
    console.log(' : : : ERROR RETRIEVING ALL USERS : : :', err);
    res.status(404).send({ error: err });
  }
};

// --------------------------------------------------------
// --------------------------------------------------------
// # EDIT USER INFO WITH VALIDATION

// Interface for validation output object
interface ErrorOutput {
  error: boolean
  errorMsg: String[],
}

// Helper function for validating user bio
const validateUserBio = (body: any) => {
  const output: ErrorOutput = { error: false, errorMsg: [] };
  // Users can have empty bio / might not update bio
  if (!body.bio || body.bio === '') return output;
  // Checking correct input
  if (typeof body.bio !== 'string') {
    output.error = true;
    output.errorMsg.push('Bio is not in string format!');
  }
  // Checking correct length
  if (body.bio.length > 255) {
    output.error = true;
    output.errorMsg.push('Bio too long! (max. 255 characters) ');
  }
  return output;
};

// Helper function for validating user first name
const validateFirstName = (body: any) => {
  const output: ErrorOutput = { error: false, errorMsg: [] };
  // Users may not be updating their name
  if (!body.first_name || body.first_name === '') return output;
  // Input must be correct type
  if (typeof body.first_name !== 'string') {
    output.error = true;
    output.errorMsg.push('first name is not in string format!');
  }
  if (body.first_name.length > 15) {
    output.error = true;
    output.errorMsg.push('First name too long (Max 15 characters!)');
  }
  // Regex for testing if first name has whitespaces
  if (/\s/.test(body.first_name)) {
    output.error = true;
    output.errorMsg.push('First name contains white spaces');
  }
  return output;
};

// Helper function for validating user last name
const validateLastName = (body: any) => {
  const output: ErrorOutput = { error: false, errorMsg: [] };
  // Users may not be updating their name
  if (!body.last_name || body.last_name === '') return output;
  // Input must be correct type
  if (typeof body.last_name !== 'string') {
    output.error = true;
    output.errorMsg.push('last name is not in string format!');
  }
  // Input must be correct length
  if (body.last_name.length > 25) {
    output.error = true;
    output.errorMsg.push('Last name too long (Max 25 characters!)');
  }
  return output;
};

// Edit 1 user Bio by ID 🅱️ 🅿️
const editUserInfo = async (req: Request, res: Response) => {
  try {
    // Grabbing userID
    const userId : number = Number(req.params.userid);
    // Handler for request errors if all fields are present
    if (req.body.bio || req.body.first_name || req.body.last_name) {
      const bioValidation: ErrorOutput = validateUserBio(req.body);
      if (bioValidation.error) {
        return res.status(401).send({ error: bioValidation.errorMsg });
      }
      const firstNameValidation: ErrorOutput = validateFirstName(req.body);
      if (firstNameValidation.error) {
        return res.status(401).send({ error: firstNameValidation.errorMsg });
      }
      const lastNameValidation: ErrorOutput = validateLastName(req.body);
      if (lastNameValidation.error) {
        return res.status(401).send({ error: lastNameValidation.errorMsg });
      }
    }

    // Grabbing new user bio
    const newUserBio: string = req.body.bio;
    const newFirstName: string = req.body.first_name;
    const newLastName: string = req.body.last_name;
    // Updating user bio
    const updatedUser = await prisma.user.update({
      where: {
        id_user: userId,
      },
      data: {
        bio: newUserBio,
        first_name: newFirstName,
        last_name: newLastName,
      },
    });

    return res.status(200).send({ data: updatedUser });
  } catch (err) {
    console.log(' : : : ERROR UPDATING USER : : :', err);
    res.status(500).send({ error: err });
  }
};
// --------------------------------------------------------
// --------------------------------------------------------

// get all events created by a user
const getUserCreatedEvents = async (req: Request, res: Response) => {
  try {
    const userId: number = Number(req.params.userid);
    const event = await prisma.user.findUnique({
      where: {
        id_user: userId,
      },
      select: {
        events_created: {
          select: {
            id_event: true,
            title: true,
            max_participants: true,
            date: true,
            description: true,
            participants: {
              select: {
                id_user: true,
              },
            },
          },
        },
      },
    });

    res.status(200).send({ data: event });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

// get all events a user is participating in
const getUserParticipatingEvents = async (req: Request, res: Response) => {
  try {
    const userId: number = Number(req.params.userid);
    const event = await prisma.user.findUnique({
      where: {
        id_user: userId,
      },
      select: {
        events_participating: {
          select: {
            id_event: true,
            title: true,
            max_participants: true,
            date: true,
            description: true,
            participants: {
              select: {
                id_user: true,
              },
            },
          },
        },
      },
    });

    res.status(200).send({ data: event });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

// Private function for deleting all users (dev purposes)
const _deleteAllUsers = async (req: Request, res: Response) => {
  try {
    const deletedUserCount = await prisma.user.deleteMany();
    res.status(200).send(deletedUserCount);
  } catch (err) {
    console.log(' : : : ERROR DELETING ALL USERS : : : ', err);
    res.status(500).send(err);
  }
};

// Delete 1 user by ID 🅿️
const deleteUser = async (req: Request, res: Response) => {
  try {
    const uid: number = Number(req.params.userid);
    const deletedUser = await prisma.user.delete({
      where: {
        id_user: uid,
      },
    });
    res.status(200).send(deletedUser);
  } catch (err) {
    console.log(' : : : ERROR DELETING USER FROM DB : : : ', err);
    res.status(500).send(err);
  }
};
// --------------------------------------------------------
// --------------------------------------------------------

// Add friend 🅿️
// async function to be added !

// Remove friend 🅿️
// async function to be added !

// --------------------------------------------------------
// 🚀🚀🚀 EXPORTS 🚀🚀🚀
export default {
  createUser,
  getUserById,
  getAllUsers,
  editUserInfo,
  login,
  logout,
  getUserCreatedEvents,
  getUserParticipatingEvents,
  deleteUser,
  _deleteAllUsers,
};
// --------------------------------------------------------
