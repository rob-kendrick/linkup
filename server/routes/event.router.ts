// LEGEND :
// 🚀🚀🚀 = New section
// ✅ = To be included in MVP
// 🅱️ = Expect request body
// 🅿️ = Expect Params (eg. Id)
// Imports
import { Router } from 'express';

// const eventController: any = require('../controllers/event.controller.ts');

// eslint-disable-next-line import/no-unresolved
import eventController from '../controllers/event.controller';

const eventRouter = Router();

// --------------------------------------------------------
//  🚀🚀🚀 EVENT ROUTES 🚀🚀🚀
// --------------------------------------------------------
// Get all events
eventRouter.get('/', eventController.getAllEvents);

// Get 1 event by ID
eventRouter.get('/:eventid', eventController.getEventById);

// Create 1 event
eventRouter.post('/', eventController.createEvent);

// Join 1 event
eventRouter.patch('/join/:eventid/:userid', eventController.joinEvent);

// Leave 1 event
eventRouter.patch('/leave/:eventid/:userid', eventController.leaveEvent);

// Edit 1 event by ID
eventRouter.patch('/:eventid', eventController.editEvent);

// Delete 1 event
eventRouter.delete('/:eventid', eventController.deleteEventById);

// Delete all events
eventRouter.delete('/', eventController._deleteAllEvents);
export default eventRouter;
