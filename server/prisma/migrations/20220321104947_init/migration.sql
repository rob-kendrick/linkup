-- CreateTable
CREATE TABLE "user" (
    "id_user" SERIAL NOT NULL,
    "first_name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "bio" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "profile_picture" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "event" (
    "id_event" SERIAL NOT NULL,
    "title" VARCHAR(30) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "creator_id" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL,
    "date_updated" TIMESTAMP(3),
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "street_number" TEXT NOT NULL,
    "street_name" TEXT NOT NULL,
    "postcode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "event_pkey" PRIMARY KEY ("id_event")
);

-- CreateTable
CREATE TABLE "_events_participating" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_events_participating_AB_unique" ON "_events_participating"("A", "B");

-- CreateIndex
CREATE INDEX "_events_participating_B_index" ON "_events_participating"("B");

-- AddForeignKey
ALTER TABLE "event" ADD CONSTRAINT "event_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "user"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_events_participating" ADD FOREIGN KEY ("A") REFERENCES "event"("id_event") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_events_participating" ADD FOREIGN KEY ("B") REFERENCES "user"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;
