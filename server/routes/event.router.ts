import { Router } from 'express';

// eslint-disable-next-line import/no-unresolved
import eventController from '../controllers/event.controller';

const eventRouter = Router();

eventRouter.get('/', eventController.getAllEvents);

eventRouter.get('/:eventid', eventController.getEventById);

eventRouter.post('/', eventController.createEvent);

eventRouter.patch('/join/:eventid/users/:userid', eventController.joinEvent);

eventRouter.patch('/leave/:eventid/users/:userid', eventController.leaveEvent);

eventRouter.patch('/:eventid', eventController.editEvent);

eventRouter.delete('/:eventid', eventController.deleteEventById);

// dev only
eventRouter.delete('/all', eventController.deleteAllEvents);

export default eventRouter;
