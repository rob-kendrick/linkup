/* eslint-disable camelcase */
// Below is some boilerplate data which will be changed once DB and models are there
// LEGEND :
// 🚀🚀🚀 = New section
// ✅ = To be included in MVP
// 🅱️ = Expect request body
// 🅿️ = Expect Params (eg. Id)
// --------------------------------------------------------
// const EventModel = require('../models/eventModelName.ts')
import { Request, Response } from 'express';
import prisma from '../db';

// --------------------------------------------------------

interface Event {
  title: string
  description: string
  creator_id: number
  min_participants?: number
  max_participants?: number
  date: Date
  lat: number
  lng: number
  street_number: string
  street_name: string
  postcode: string
  city: string
  country : string
}

// Validating user info before passing to DB
const validateEventInfo = (event: Event) => {
  if (
    !event.title
    || !event.description
    || !event.creator_id
    || !event.date
    || !event.lat
    || !event.lng
    || !event.street_number
    || !event.street_name
    || !event.postcode
    || !event.city
    || !event.country
  ) return false;
  return true;
};

// 🚀🚀🚀 CONTROLLER FUNCTIONS 🚀🚀🚀

// Get all events ✅
const getAllEvents = async (req: Request, res: Response) => {
  try {
    const events = await prisma.event.findMany();
    res.status(200).send({ data: events });
  } catch (err) {
    console.log(' : : : ERROR RETRIEVING EVENTS IN DATBASE : : : ', err);
    return res.status(500).send({ error: err });
  }
};

// Get 1 event by ID 🅿️ ✅
const getEventById = async (req: Request, res: Response) => {
  try {
    const eventId: number = Number(req.params.eventid);
    const event = await prisma.event.findUnique({
      where: {
        id_event: eventId,
      },
    });

    res.status(200).send({ data: event });
  } catch (err) {
    console.log(' : : : ERROR RETRIEVING EVENT IN DATBASE : : : ', err);
    return res.status(500).send({ error: err });
  }
};

// Create 1 event 🅱️ ✅
const createEvent = async (req: Request, res: Response) => {
  try {
    const date: Date = new Date(req.body.date);
    const lat: number = parseFloat(req.body.lat);
    const lng: number = parseFloat(req.body.lng);
    const creator_id: number = Number(req.body.creator_id);

    const eventInput: Event = {
      ...req.body,
      date,
      lat,
      lng,
      creator_id,
    };

    if (!validateEventInfo(eventInput)) {
      return res.status(400).send({ error: 'Invalid event data' });
    }

    // Creating event in database
    const newEvent = await prisma.event.create({ data: eventInput });
    return res.status(201).send(newEvent);
  } catch (err) {
    console.log(' : : : ERROR STORING EVENT IN DATBASE : : : ', err);
    return res.status(500).send(err);
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
const editEvent = async (req: Request, res: Response) => {
  try {

  } catch (err) {

  }
};

// Delete 1 event 🅿️
const deleteEventById = async (req: Request, res: Response) => {
  try {
    const eventId: number = Number(req.params.eventid);
    const deleteEvent = await prisma.event.delete({
      where: {
        id_event: eventId,
      },
    });
    return res.status(200).send({ data: deleteEvent });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};

// Delete all events 🅿️
const _deleteAllEvents = async (req: Request, res: Response) => {
  try {
    const deleteEvents = await prisma.event.deleteMany();
    return res.status(200).send({ data: deleteEvents });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};

// --------------------------------------------------------
// 🚀🚀🚀 EXPORTS 🚀🚀🚀
export default {
  getAllEvents,
  getEventById,
  createEvent,
  joinEvent,
  leaveEvent,
  editEvent,
  deleteEventById,
  _deleteAllEvents,
};
// --------------------------------------------------------
