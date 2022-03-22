/* eslint-disable camelcase */
import { Request, Response } from 'express';
import prisma from '../db';

// creating Event type
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

// Validating event info before passing to DB
const validateEventInfo = (event: Event) => {
  const output: any = { error: false, errorMessages: [] };
  if (!event.title
    || !event.description
    || !event.creator_id
    || !event.date
    || !event.lat
    || !event.lng
    || !event.street_number
    || !event.street_name
    || !event.postcode
    || !event.city
    || !event.country) {
    output.error = true;
    output.errorMessages.push('Invalid event data');
  }
  return output;
};

// get all events
const getAllEvents = async (req: Request, res: Response) => {
  try {
    const events = await prisma.event.findMany();
    res.status(200).send({ data: events });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

// get single event by id
const getEventById = async (req: Request, res: Response) => {
  try {
    const eventId: number = Number(req.params.eventid);
    const event = await prisma.event.findUnique({
      where: {
        id_event: eventId,
      },
      include: {
        participants: {
          select: {
            id_user: true,
            first_name: true,
            profile_picture: true,
          },
        },
      },
    });

    res.status(200).send({ data: event });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

// get events by creator id
const getEventsByCreatorId = async (req: Request, res: Response) => {
  try {
    const userId: number = Number(req.params.userid);
    const event = await prisma.user.findUnique({
      where: {
        id_user: userId,
      },
      select: {
        events_created: true,
      },
      // include: {
      //   events_created: {
      //     select: {
      //       id_event: true,
      //       title: true,
      //       max_participants: true,
      //       date: true,
      //       description: true,
      //       participants: {
      //         select: {
      //           id_user: true,
      //         },
      //       },
      //     },
      //   },
      // },
    });
    //

    res.status(200).send({ data: event });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

// get events by participant id
const getEventsByParticipantId = async (req: Request, res: Response) => {
  try {
    const userId: number = Number(req.params.userid);
    const event = await prisma.event.findMany({
      where: {
        participants: {

        },
      },
      include: {
        participants: {
          select: {
            id_user: true,
            first_name: true,
            profile_picture: true,
          },
        },
      },
    });

    res.status(200).send({ data: event });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

// crate new event
const createEvent = async (req: Request, res: Response) => {
  try {
    // convert date and id into correct data types
    const date: Date = new Date(req.body.date);
    const creator_id: number = Number(req.body.creator_id);

    const eventInput: Event = {
      ...req.body,
      date,
      creator_id,
    };

    const eventValidation: any = validateEventInfo(req.body);
    if (eventValidation.error) {
      return res.status(401).send({ error: eventValidation.errorMessages });
    }

    const newEvent = await prisma.event.create({ data: eventInput });
    res.status(201).send({ data: newEvent });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

// join event by adding user to participants
const joinEvent = async (req: Request, res: Response) => {
  try {
    // convert ids form params into integers
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
        participants: {
          select: {
            id_user: true,
            first_name: true,
            profile_picture: true,
          },
        },
      },
    });
    res.status(200).send({ data: addParticipant });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

// leave event by removing user from participants
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

    res.status(200).send({ data: removeParticipant });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

// edit event information: title, desc, max participans & min participants
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
        min_participants: req.body.min_participants,
        max_participants: req.body.max_participants,
      },

    });
    res.status(200).send({ data: updateEvent });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

// delete single event by event id
const deleteEventById = async (req: Request, res: Response) => {
  try {
    const eventId: number = Number(req.params.eventid);
    const deleteEvent = await prisma.event.delete({
      where: {
        id_event: eventId,
      },
    });
    res.status(200).send({ data: deleteEvent });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

// delete all events. Not to be used in front-end
const _deleteAllEvents = async (req: Request, res: Response) => {
  try {
    const deleteEvents = await prisma.event.deleteMany();
    res.status(200).send({ data: deleteEvents });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

export default {
  getAllEvents,
  getEventById,
  getEventsByCreatorId,
  createEvent,
  joinEvent,
  leaveEvent,
  editEvent,
  deleteEventById,
  _deleteAllEvents,
};
