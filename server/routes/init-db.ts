/* eslint-disable camelcase */
import { Request, Response } from 'express';
import util from 'util';
import prisma from '../db';
import mockUsers from '../mock-data/user-mock-data.json';
import mockEvents from '../mock-data/event-mock-data.json';

const resetDb = async (req:Request, res:Response) => {
  try {
    await prisma.$queryRawUnsafe('DROP TABLE IF EXISTS "event" CASCADE');
    await prisma.$queryRawUnsafe('DROP TABLE IF EXISTS "user" CASCADE');
    await prisma.$queryRawUnsafe('DROP TABLE IF EXISTS "_participating_events" CASCADE');
    await prisma.$queryRawUnsafe('DROP TABLE IF EXISTS "_prisma_migrations" CASCADE');

    // eslint-disable-next-line global-require
    const exec = util.promisify(require('child_process').exec);
    await exec('npx prisma generate');
    await exec('npx prisma migrate dev');

    const arr = [
      [1, 2],
      [1, 4],
      [1, 6],
      [2, 2],
      [2, 7],
      [2, 8],
      [2, 9],
      [3, 1],
      [3, 5],
      [3, 3],
      [4, 1],
      [4, 2],
      [4, 4],
      [4, 8],
      [6, 1],
      [6, 2],
      [7, 1],
      [7, 2],
      [7, 3],
      [7, 4],
      [7, 5],
      [7, 6],
      [7, 7],
      [7, 9],
      [7, 2],
    ];

    const results:any = {};

    const createAllUsers = await prisma.user.createMany({ data: mockUsers });
    results.createUsers = createAllUsers;

    const createAllEvents = await prisma.event.createMany({ data: mockEvents });
    results.createEvents = createAllEvents;

    results.joinEvents = { count: 0 };

    // eslint-disable-next-line no-restricted-syntax
    for (const el of arr) {
      // eslint-disable-next-line no-await-in-loop
      const joinEvent = await prisma.event.update({
        where: {
          id_event: el[0],
        },
        data: {
          participants: {
            connect: [{ id_user: el[1] }],
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
          creator: {
            select: {
              id_user: true,
              first_name: true,
              profile_picture: true,
            },
          },
        },
      });
      results.joinEvents.count += 1;
    }

    res.status(200).send({
      data: {
        message: 'linkup_db succesfully reset - all tables dropped and re-migrated and re-populated with mock data',
        results,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(200).send({ error: err });
  }
};

export default { resetDb };
