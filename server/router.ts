// LEGEND :
// 🚀🚀🚀 = New section
// ✅ = To be included in MVP
// 🅱️ = Expect request body
// 🅿️ = Expect Params (eg. Id)
// --------------------------------------------------------
// IMPORTS
const { Router } = require('express');
const userController = require('./controllers/userController.ts');
const eventController = require('./controllers/eventController.ts');

const router = Router();

// Defining Routes!
// --------------------------------------------------------
//  🚀🚀🚀 EVENT ROUTES 🚀🚀🚀

// Get all events ✅
router.get('/events', eventController.getAllEvents);

// Get 1 event by ID 🅿️ ✅
router.get('events/:eventid', eventController.getEventById);

// Create 1 event 🅱️ ✅
router.post('/events', eventController.createEvent);

// Join 1 event 🅿️ ✅
router.patch('/events/join/:eventid/:userid', eventController.joinEvent);

// Leave 1 event 🅿️ ✅
router.patch('/events/leave/:eventid/:userid', eventController.leaveEvent);

// Edit 1 event by ID 🅿️ 🅱️
router.patch('/events/:eventid', eventController.editEvent);

// Delete 1 event 🅿️
router.delete('/events/:eventid', eventController.deleteEventById);

// --------------------------------------------------------
// 🚀🚀🚀 USER ROUTES 🚀🚀🚀

// Create 1 user 🅱️ ✅
router.post('/users', userController.createUser);

// Get 1 user by ID 🅿️ ✅
router.get('/users/:userid', userController.getUserById);

// Get all users
router.get('/users', userController.getAllUsers);

// Edit 1 user by ID 🅿️ 🅱️
router.patch('/users/:userid', userController.editUser);

// Delete 1 user by ID 🅿️
router.delete('/users/:userid', userController.deleteUser);

// Add friend 🅿️
// route and controller Func to be added !

// Remove friend 🅿️
// route and controller func to be added !

// --------------------------------------------------------
// 🚀🚀🚀 LOGIN + LOGOUT ROUTES 🚀🚀🚀

// --------------------------------------------------------
// 🚀🚀🚀 RATINGS ROUTES 🚀🚀🚀

// --------------------------------------------------------
// 🚀🚀🚀 TAGS ROUTES 🚀🚀🚀

// --------------------------------------------------------
