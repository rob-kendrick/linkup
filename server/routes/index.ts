import { Router } from 'express';
import userRoutes from './user.router';
import eventRoutes from './event.router';
import authRoutes from './auth.router';
import initdb from './init-db';
// import authMiddleware from '../middlewares/auth';

const router = Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/events', eventRoutes);

// dev only
router.purge('/resetdb', initdb.resetDb);

export default router;
