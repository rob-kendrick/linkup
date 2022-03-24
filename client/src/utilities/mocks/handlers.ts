// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import users from './users.json';

const handlers = [
  rest.get('http://localhost:4000/users/', (req, res, ctx) => res(
    ctx.json(users),
  )),
];

export default handlers;
