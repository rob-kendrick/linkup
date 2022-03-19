// LEGEND :
// 🚀🚀🚀 = New section
// ✅ = To be included in MVP
// 🅱️ = Expect request body

// --------------------------------------------------------
// IMPORTS
const { Router } = require('express');
// const userController = require('./controllers/userController.ts');
const eventController = require('./controllers/eventController.ts');

const router = Router();

// Defining Routes!
// --------------------------------------------------------
//  🚀🚀🚀 EVENT ROUTES 🚀🚀🚀

// Get all events ✅
router.get('/events', eventController.getAllEvents);

// Get 1 event ✅
router.get('events/:eventid', eventController.getEventById);

// Create 1 event 🅱️ ✅
router.post('/events', eventController.createEvent);

// Join 1 event ✅
router.patch('/events/join/:eventid/:userid', eventController.joinEvent);

// Leave 1 event ✅
router.patch('/events/leave/:eventid/:userid', eventController.leaveEvent);

// Edit 1 event 🅱️
router.patch('/events/:eventid', eventController.editEvent);

// Delete 1 event
router.delete('/events/:eventid', eventController.deleteEventById);

// --------------------------------------------------------
// 🚀🚀🚀 USER ROUTES 🚀🚀🚀

// Create 1 user 🅱️ ✅

// Get 1 user by ID ✅

// Get all users

// Edit 1 user 🅱️

// Delete 1 user

// Add friend

// Remove friend

// --------------------------------------------------------
// 🚀🚀🚀 LOGIN + LOGOUT ROUTES 🚀🚀🚀

// --------------------------------------------------------
// 🚀🚀🚀 RATINGS ROUTES 🚀🚀🚀

// --------------------------------------------------------
// 🚀🚀🚀 TAGS ROUTES 🚀🚀🚀

// --------------------------------------------------------
