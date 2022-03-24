-- CreateTable
CREATE TABLE "tag" (
    "id_tag" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "eventId_event" INTEGER,

    CONSTRAINT "tag_pkey" PRIMARY KEY ("id_tag")
);

-- CreateTable
CREATE TABLE "_friends" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_friends_AB_unique" ON "_friends"("A", "B");

-- CreateIndex
CREATE INDEX "_friends_B_index" ON "_friends"("B");

-- AddForeignKey
ALTER TABLE "tag" ADD CONSTRAINT "tag_eventId_event_fkey" FOREIGN KEY ("eventId_event") REFERENCES "event"("id_event") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_friends" ADD FOREIGN KEY ("A") REFERENCES "user"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_friends" ADD FOREIGN KEY ("B") REFERENCES "user"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;
