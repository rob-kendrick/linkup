// Below is some boilerplate data which will be changed once DB and models are there
// LEGEND :
// 🚀🚀🚀 = New section
// ✅ = To be included in MVP
// 🅱️ = Expect request body
// 🅿️ = Expect Params (eg. Id)
// --------------------------------------------------------
// const EventModel = require('../models/eventModelName.ts')
import { Request, Response } from 'express';
// --------------------------------------------------------

// 🚀🚀🚀 CONTROLLER FUNCTIONS 🚀🚀🚀

// Get all events ✅
const getAllEvents = async (req: Request, res: Response) => {
  try {
    console.log('get all events firing!');
    res.send('get all events firing!');
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

// Get 1 event by ID 🅿️ ✅
const getEventById = async (req: Request, res: Response) => {
  try {

  } catch (err) {

  }
};

// Create 1 event 🅱️ ✅
const createEvent = async (req: Request, res: Response) => {
  try {

  } catch (err) {

  }
};

// Join 1 event 🅿️ ✅
const joinEvent = async (req: Request, res: Response) => {
  try {

  } catch (err) {

  }
};

// Leave 1 event 🅿️ ✅
const leaveEvent = async (req: Request, res: Response) => {
  try {

  } catch (err) {

  }
};

// Edit 1 event 🅿️ 🅱️
// async function to be added !

// Delete 1 event 🅿️
// async function to be added !
// --------------------------------------------------------
// 🚀🚀🚀 EXPORTS 🚀🚀🚀
export default {
  getAllEvents, getEventById, createEvent, joinEvent, leaveEvent,
};
// --------------------------------------------------------
