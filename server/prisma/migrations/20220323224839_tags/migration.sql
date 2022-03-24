/*
  Warnings:

  - You are about to drop the column `eventId_event` on the `tag` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "tag" DROP CONSTRAINT "tag_eventId_event_fkey";

-- AlterTable
ALTER TABLE "tag" DROP COLUMN "eventId_event",
ADD COLUMN     "eventId" INTEGER;

-- AddForeignKey
ALTER TABLE "tag" ADD CONSTRAINT "tag_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "event"("id_event") ON DELETE SET NULL ON UPDATE CASCADE;
