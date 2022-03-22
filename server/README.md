## First steps
- make sure to have ESLint installed and set as default formatter
- run `npm i` inside the server folder before starting the server.
- create .env file. See example below.

## Running the server
- to run the server with nodemon, do `npx nodemon ./index.ts`

## Manually compiling ts into js
- To manually compile the TS files into JS, do `npm run build`. This will transpile the server into JS. This should not be done during development, but at the end, when we are ready to deploy.

## Setting up and running the database
- run `psql postgres` to start psql CLI and create database by running `create database linkup_db;`
- `npx prisma generate` from the server folder to establish link between schema.prisma and .env file

## Updating schema / models
- Before you make changes, run `npx prisma migrate dev --create-only`.
- To finalise changes, run `npx prisma migrate dev`

## Viewing the database data and tables
- Run `npx prisma studio` to visualise the database

## Common errors with prisma studio
1. Database 'linkup_db' does not exist:
- Create database with `create database linkup_db;` in PSQL CLI
- Re-run `npx prisma studio` from server folder.

2. Table "user" or Table "event" does not exist in DB
- Run `npx prisma migrate reset` from the server root folder


## Example .env file
```
DATABASE_URL="DATABASE_URL="postgresql://{username}:{password}@localhost:5432/linkup_db"
```

- {username} = Postgres username. To check username run `\du` from PSQL CLI
- {password} = Postgres password. If forgotten reset the password in PG Admin