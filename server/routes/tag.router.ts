import { Router } from 'express';
import tagController from '../controllers/tag.controller';

const authRouter = Router();

authRouter.get('/', tagController.getAllTags);

authRouter.post('/', tagController.createTag);

authRouter.delete('/:tagid', tagController.deleteTag);

export default authRouter;
