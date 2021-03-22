/*
  Warnings:

  - You are about to alter the column `winPercentage` on the `Team` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - The migration will add a unique constraint covering the columns `[teamId]` on the table `ColorScheme`. If there are existing duplicate values, the migration will fail.

*/
-- AlterTable
ALTER TABLE "Team" ALTER COLUMN "winPercentage" SET DATA TYPE DOUBLE PRECISION;

-- CreateIndex
CREATE UNIQUE INDEX "ColorScheme_teamId_unique" ON "ColorScheme"("teamId");
