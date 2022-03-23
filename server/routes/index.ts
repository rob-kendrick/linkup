import { Router } from 'express';
// eslint-disable-next-line import/no-unresolved
import userRoutes from './user.router';
// eslint-disable-next-line import/no-unresolved
import eventRoutes from './event.router';
// eslint-disable-next-line import/no-unresolved
import authRoutes from './auth.router';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
import authMiddleware from '../middlewares/auth';

const router = Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/events', eventRoutes);

export default router;
