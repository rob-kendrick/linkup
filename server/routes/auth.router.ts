import { Router } from 'express';
import authController from '../controllers/auth.controller';

const authRouter = Router();

authRouter.post('/create', authController.createUser);

authRouter.post('/login', authController.login);

// authRouter.post('/logout', authController.logout);

export default authRouter;
