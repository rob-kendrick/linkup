// Below is some boilerplate data which will be changed once DB and models are there
// LEGEND :
// 🚀🚀🚀 = New section
// ✅ = To be included in MVP
// 🅱️ = Expect request body
// 🅿️ = Expect Params (eg. Id)
// --------------------------------------------------------
// IMPORTS
// const UserModel = require('../models/modelName1')
import { Request, Response } from 'express';

const bcrypt = require('bcrypt');
// --------------------------------------------------------
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

// Create 1 user 🅱️ ✅
const createUser = async (req: Request, res: Response) => {
  try {
    // destructure req.body
    // check if user exists
    // if user exists, send status 409
    // hash password
    // store user in DB
    // send JWToken / session cookie

  } catch (err) {

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
