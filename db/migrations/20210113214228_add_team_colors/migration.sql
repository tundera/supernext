-- CreateTable
CREATE TABLE "Coach" (
"id" SERIAL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "handle" TEXT,
    "name" TEXT,
    "teamId" INTEGER,
    "type" TEXT,
    "isAssistant" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
"id" SERIAL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "handle" TEXT,
    "name" TEXT,
    "slug" TEXT,
    "teamId" INTEGER,
    "height" TEXT,
    "weight" TEXT,
    "number" TEXT,
    "position" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
"id" SERIAL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "handle" TEXT,
    "name" TEXT,
    "slug" TEXT,
    "city" TEXT,
    "abbreviation" TEXT,
    "primaryolor" TEXT,
    "secondaryColor" TEXT,
    "wins" INTEGER,
    "losses" INTEGER,
    "winPercentage" DECIMAL(65,30),
    "conference" TEXT,
    "division" TEXT,
    "established" TEXT,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Coach.handle_unique" ON "Coach"("handle");

-- CreateIndex
CREATE UNIQUE INDEX "Player.handle_unique" ON "Player"("handle");

-- CreateIndex
CREATE UNIQUE INDEX "Team.handle_unique" ON "Team"("handle");

-- AddForeignKey
ALTER TABLE "Coach" ADD FOREIGN KEY("teamId")REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD FOREIGN KEY("teamId")REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
