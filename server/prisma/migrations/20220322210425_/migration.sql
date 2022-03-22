/*
  Warnings:

  - You are about to drop the `_events_participating` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_events_participating" DROP CONSTRAINT "_events_participating_A_fkey";

-- DropForeignKey
ALTER TABLE "_events_participating" DROP CONSTRAINT "_events_participating_B_fkey";

-- DropTable
DROP TABLE "_events_participating";

-- CreateTable
CREATE TABLE "_participating_events" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_participating_events_AB_unique" ON "_participating_events"("A", "B");

-- CreateIndex
CREATE INDEX "_participating_events_B_index" ON "_participating_events"("B");

-- AddForeignKey
ALTER TABLE "_participating_events" ADD FOREIGN KEY ("A") REFERENCES "event"("id_event") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_participating_events" ADD FOREIGN KEY ("B") REFERENCES "user"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;
