import { Router } from 'express';
// eslint-disable-next-line import/no-unresolved
import userController from '../controllers/user.controller';

const userRouter = Router();

userRouter.get('/', userController.getAllUsers);

userRouter.get('/:userid', userController.getUserById);

userRouter.get('/', userController.getAllUsers);

userRouter.patch('/:userid', userController.editUserInfo);

userRouter.get('/:userid/events/created/', userController.getUserCreatedEvents);

userRouter.get('/:userid/events/participating/', userController.getUserParticipatingEvents);

userRouter.delete('/:userid', userController.deleteUser);

// Dev only
userRouter.delete('/', userController._deleteAllUsers);

export default userRouter;
