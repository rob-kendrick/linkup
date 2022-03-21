/* eslint-disable camelcase */
import { Request, Response } from 'express';
import prisma from '../db';

// Validating event info before passing to DB
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

const getAllEvents = async (req: Request, res: Response) => {
  try {
    const events = await prisma.event.findMany();
    res.status(200).send({ data: events });
  } catch (err) {
    console.log(' : : : ERROR RETRIEVING EVENTS IN DATBASE : : : ', err);
    return res.status(500).send({ error: err });
  }
};

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
    return res.status(201).send({ data: newEvent });
  } catch (err) {
    console.log(' : : : ERROR STORING EVENT IN DATBASE : : : ', err);
    return res.status(500).send({ error: err });
  }
};

const joinEvent = async (req: Request, res: Response) => {
  try {
    const eventId: number = Number(req.params.eventid);
    const userId: number = Number(req.params.userid);

    const addParticipant = await prisma.event.update({
      where: {
        id_event: eventId,
      },
      data: {
        participants: {
          connect: [{ id_user: userId }],
        },
      },
      include: {
        participants: true, // Include all posts in the returned object
      },
    });
    return res.status(200).send({ data: addParticipant });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};

const leaveEvent = async (req: Request, res: Response) => {
  try {
    const eventId: number = Number(req.params.eventid);
    const userId: number = Number(req.params.userid);

    const removeParticipant = await prisma.event.update({
      where: {
        id_event: eventId,
      },
      data: {
        participants: {
          disconnect: [{ id_user: userId }],
        },
      },
      include: {
        participants: {
          select: {
            first_name: true,
          },
        },
      },
    });

    return res.status(200).send({ data: removeParticipant });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};

const editEvent = async (req: Request, res: Response) => {
  try {
    const eventId: number = Number(req.params.eventid);
    const updateEvent = await prisma.event.update({
      where: {
        id_event: eventId,
      },
      data: {
        title: req.body.title,
        description: req.body.description,
      },

    });
    return res.status(200).send({ data: updateEvent });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};

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

const _deleteAllEvents = async (req: Request, res: Response) => {
  try {
    const deleteEvents = await prisma.event.deleteMany();
    return res.status(200).send({ data: deleteEvents });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};

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
