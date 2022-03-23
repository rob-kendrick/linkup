import { Router } from 'express';
import userController from '../controllers/user.controller';

const userRouter = Router();

userRouter.get('/', userController.getAllUsers);

userRouter.get('/:userid', userController.getUserById);

userRouter.patch('/:userid', userController.editUserInfo);

userRouter.post('/:userid/friends/add/:friendid', userController.addFriend);

userRouter.delete('/:userid/friends/remove/:friendid', userController.removeFriend);

userRouter.delete('/:userid', userController.deleteUser);

// dev only
userRouter.delete('/', userController.deleteAllUsers);

// not in use
// userRouter.get('/:userid/events/created/', userController.getUserCreatedEvents);
// userRouter.get('/:userid/events/participating/', userController.getUserParticipatingEvents);

export default userRouter;
