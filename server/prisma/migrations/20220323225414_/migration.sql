/*
  Warnings:

  - You are about to drop the column `eventId` on the `tag` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "tag" DROP CONSTRAINT "tag_eventId_fkey";

-- AlterTable
ALTER TABLE "event" ADD COLUMN     "tags" TEXT[];

-- AlterTable
ALTER TABLE "tag" DROP COLUMN "eventId";
