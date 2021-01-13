/*
  Warnings:

  - You are about to drop the column `primaryolor` on the `Team` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Team" DROP COLUMN "primaryolor",
ADD COLUMN     "primaryColor" TEXT;
