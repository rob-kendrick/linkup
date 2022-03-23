// @ts-nocheck

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import prisma from '../db';

const SECRET_KEY = process.env.SECRET_KEY || 'open sesame';

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const authHeaders = req.headers.authorization;
  if (!authHeaders) return res.sendStatus(403);
  const token = authHeaders.split(' ')[1]; // splitting auth header to get our token value

  try {
    // verifying and decoding our access token.
    // This verifies if it is the authorised user
    const { id_user } = jwt.verify(token, SECRET_KEY);

    const foundUser = await prisma.user.findUnique({
      where: {
        id_user,
      },
    });
    if (!foundUser) return res.sendStatus(401);

    console.log(foundUser);
    req.user = foundUser;
    return next();
  } catch (err) {
    console.log(' : : : ERROR IN AUTH MIDDLEWARE : : : ', err);
    return res.status(401).send(err);
  }
};

export default authMiddleware;
