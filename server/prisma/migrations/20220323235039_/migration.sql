-- DropForeignKey
ALTER TABLE "event" DROP CONSTRAINT "event_creator_id_fkey";

-- AddForeignKey
ALTER TABLE "event" ADD CONSTRAINT "event_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "user"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;
