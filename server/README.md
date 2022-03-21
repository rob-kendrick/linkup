# BEFORE WE DO ANYTHING

- make sure to have ESLint installed and set as default formatter
- run `npm i` inside the server folder before starting the server.

-----------------------------------------------------------------------------------------------------------------------
# RUNNING THE SERVER
- to run the server with nodemon, do `npx nodemon ./index.ts`

-----------------------------------------------------------------------------------------------------------------------
# MANUALLY COMPILING TS INTO JS
- To manually compile the TS files into JS, do `npm run build`. This will transpile the server into JS. This should not be done during development, but at the end, when we are ready to deploy.
-----------------------------------------------------------------------------------------------------------------------
# SETTING UP AND RUNNING THE DATABASE WITH  || PostgresQL + Prisma ||
- run `psql posgres`
- Before we do anything, we need to create our database in the PSQL command line
-     We can do this by running  `create database linkup_db;`
# 🆘🆘🆘 >>> IMPORTANT !
- in .env, add 'DATABASE_URL="postgresql://{username}:{password}@localhost:5432/linkup_db'
-     - {username} = Postgres username. If not sure what username is, run `\du` from PSQL CLI
-     - {password} = Postgres password. If not sure, check / reset in PG Admin
# RUNNING THE DATABASE
- On first run, run `npx prisma generate` to establish link between schema.prisa and .env file
- Whenever you make changes to your Prisma schema in the future, you manually need to invoke `prisma generate` in order to accommodate the changes in your Prisma Client API.
- DOCS below 👇👇👇:
>>https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/install-prisma-client-typescript-postgres

-----------------------------------------------------------------------------------------------------------------------
# VIEWING THE DATABASE DATA AND TABLES
- Run `npx prisma studio` to visualise our database

-----------------------------------------------------------------------------------------------------------------------
# POTENTIAL ERRORS

- if running `npx prisma studio` generates errors, such as:

- 1:
-    "Database 'linkup_db' does not exist
-     SOLUTION: run `create database linkup_db;` in PSQL CLI
-     now, re-run `npx prisma studio` from server folder. This will open the prisma data viewer in browser.

- 2:
-    "Table "user" || "event" does not exist in DB
-     SOLUTION: run `npx prisma migrate reset` from the server root folder
-     Now re-run `npx prisma studio` from server folder. This will open prisma data viewer in browser.


-----------------------------------------------------------------------------------------------------------------------
# 👇👇👇 MOCK .env FILE BELOW 👇👇👇

=== START ===

# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB (Preview) and CockroachDB (Preview).
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="postgresql://{username}:{password}@localhost:5432/linkup_db"

=== END ===
-----------------------------------------------------------------------------------------------------------------------