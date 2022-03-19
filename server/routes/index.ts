import { Router } from 'express';
// eslint-disable-next-line import/no-unresolved
import userRoutes from './user.router';
// eslint-disable-next-line import/no-unresolved
import eventRoutes from './event.router';

const router = Router();

// Concatting endpoints with user and event routes
router.use('/users', userRoutes);
router.use('/events', eventRoutes);

export default router;
