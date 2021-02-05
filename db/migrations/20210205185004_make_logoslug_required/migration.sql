/*
  Warnings:

  - Made the column `logoSlug` on table `Team` required. The migration will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Team" ALTER COLUMN "logoSlug" SET NOT NULL;
