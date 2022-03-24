## First steps
- Make sure to have ESLint installed and set as default formatter
- Run `npm i` inside the server folder before starting the server.
- create .env file. See example below.

## Running the server
- to run the server with nodemon, do `npx nodemon ./index.ts`

## Setting up and running the database
- Make sure you have postgresql installed locally
- Run `psql postgres` to start psql CLI and create database by running `create database linkup_db;` and exit cli with `quit`
- Run `Runs seed scripts
Runs seed scripts
- Run `npx prisma generate` from the server folder to establish link between schema.prisma and .env file
- Run `npx prisma migrate deploy` to create create a new migrate (to sync database schema to prisma schema)

## Viewing the database data and tables
- Run `npx prisma studio` to visualise the database and open localhost:5555 in the browswer

## Updating schema / models
- Make changes
- Run  `npx prisma migrate deploy`

## Common errors with prisma studio
1. Database 'linkup_db' does not exist:
- Create database with `create database linkup_db;` in PSQL CLI
- Run `npx prisma studio` from server folder.

2. Table "user" or Table "event" does not exist in DB
- Run `npx prisma generate`
- Run `npx prisma migrate dev`

## Example .env file
```
DATABASE_URL="DATABASE_URL="postgresql://{username}:{password}@localhost:5432/linkup_db"
```

- {username} = Postgres username. To check username run `\du` from PSQL CLI
- {password} = Postgres password. If forgotten reset the password in PG Admin