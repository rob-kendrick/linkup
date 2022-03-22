// Declares file as a module, allows us to declare { Router } in both router files
// LEGEND :
// 🚀🚀🚀 = New section
// ✅ = To be included in MVP
// 🅱️ = Expect request body
// 🅿️ = Expect Params (eg. Id)
// --------------------------------------------------------
// IMPORTS
import { Router } from 'express';
// eslint-disable-next-line import/no-unresolved
import userController from '../controllers/user.controller';

const userRouter = Router();
// --------------------------------------------------------
// 🚀🚀🚀 LOGIN + LOGOUT ROUTES 🚀🚀🚀
// --------------------------------------------------------

// Login 🅱️ ✅
userRouter.post('/login', userController.login);

// Logout ✅
userRouter.post('/logout', userController.logout);

// --------------------------------------------------------
// 🚀🚀🚀 USER ROUTES 🚀🚀🚀
// --------------------------------------------------------
// Create 1 user 🅱️ ✅
userRouter.post('/', userController.createUser);

// Get 1 user by ID 🅿️ ✅
userRouter.get('/:userid', userController.getUserById);

// Get all users
userRouter.get('/', userController.getAllUsers);

// Edit 1 user by ID 🅿️ 🅱️
userRouter.patch('/:userid', userController.editUserBio);

// Delete 1 user by ID 🅿️
userRouter.delete('/:userid', userController.deleteUser);

// Delete all users (DEV PURPOSES)
userRouter.delete('/', userController._deleteAllUsers);

// Add friend 🅿️
// route and controller Func to be added !

// Remove friend 🅿️
// route and controller func to be added !

// --------------------------------------------------------
// 🚀🚀🚀 RATINGS ROUTES 🚀🚀🚀
// --------------------------------------------------------

// --------------------------------------------------------
// 🚀🚀🚀 TAGS ROUTES 🚀🚀🚀
// --------------------------------------------------------
export default userRouter;
