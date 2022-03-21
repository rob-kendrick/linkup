# Server Info

- make sure to have ESLint installed and set as default formatter
- run `npm i` inside the server folder before starting the server.
- to run the server with nodemon, do `npx nodemon ./index.ts`
- To manually compile the TS files into JS, do `npm run build`. This will transpile the server into JS. This should not be done during development, but at the end, when we are ready to deploy.

Prisma DB
- Whenever you make changes to your Prisma schema in the future, you manually need to invoke prisma generate in order to accommodate the changes in your Prisma Client API.
>>https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/install-prisma-client-typescript-postgres
- Run npx prisma studio to visualise our database