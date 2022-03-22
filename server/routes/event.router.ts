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

// Get 1 event by event ID
eventRouter.get('/:eventid', eventController.getEventById);

// Get all events by creator ID
eventRouter.get('/:userid/events/created/', eventController.getEventsByCreatorId);

// Get all events by creator ID
eventRouter.get('/:userid/events/participating/', eventController.getEventsByCreatorId);

// Create 1 event
eventRouter.post('/', eventController.createEvent);

// Join 1 event
eventRouter.patch('/join/:eventid/users/:userid', eventController.joinEvent);

// Leave 1 event
eventRouter.patch('/leave/:eventid/users/:userid', eventController.leaveEvent);

// Edit 1 event by ID
eventRouter.patch('/:eventid', eventController.editEvent);

// Delete 1 event
eventRouter.delete('/:eventid', eventController.deleteEventById);

// Delete all events
eventRouter.delete('/_all', eventController._deleteAllEvents);
export default eventRouter;
