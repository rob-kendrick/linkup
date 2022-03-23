/*
  Warnings:

  - Added the required column `first_name` to the `event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile_picture` to the `event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "event" ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "profile_picture" TEXT NOT NULL;
