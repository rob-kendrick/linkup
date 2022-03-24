import { Router } from 'express';
import userRoutes from './user.router';
import eventRoutes from './event.router';
import authRoutes from './auth.router';
import tagRoutes from './tag.router';
import resetDb from '../dev-tools/restart-db-script';
// import authMiddleware from '../middlewares/auth';

const router = Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/tags', tagRoutes);

// dev only
router.purge('/resetdb', resetDb);

export default router;
