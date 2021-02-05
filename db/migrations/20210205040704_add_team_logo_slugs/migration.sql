/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[logoSlug]` on the table `Team`. If there are existing duplicate values, the migration will fail.

*/
-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "logoSlug" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Team.logoSlug_unique" ON "Team"("logoSlug");
