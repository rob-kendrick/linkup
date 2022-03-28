import { Router } from 'express';
import userController from '../controllers/user.controller';

const userRouter = Router();

userRouter.get('/', userController.getAllUsers);

userRouter.get('/:userid', userController.getUserById);

userRouter.put('/:userid', userController.editUserInfo);

userRouter.post('/:userid/friends/add/:friendid', userController.addFriend);

userRouter.delete('/:userid/friends/remove/:friendid', userController.removeFriend);

userRouter.delete('/:userid', userController.deleteUser);

userRouter.get('/:userid/events/created/', userController.getUserCreatedEvents);

userRouter.get('/:userid/events/participating/', userController.getUserParticipatingEvents);

userRouter.put('/:userid/password/', userController.changePassword);

// dev only
userRouter.delete('/', userController.deleteAllUsers);

export default userRouter;
