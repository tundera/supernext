-- CreateTable
CREATE TABLE "Coach" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "handle" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "teamId" INTEGER,
    "type" TEXT,
    "isAssistant" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "handle" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "teamId" INTEGER,
    "height" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "number" TEXT,
    "position" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ColorScheme" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "primary" TEXT NOT NULL,
    "secondary" TEXT NOT NULL,
    "teamId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "handle" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "abbreviation" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "wins" INTEGER,
    "losses" INTEGER,
    "winPercentage" DECIMAL(65,30),
    "conference" TEXT NOT NULL,
    "division" TEXT NOT NULL,
    "established" TEXT NOT NULL,
    "primaryColor" TEXT NOT NULL,
    "secondaryColor" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Coach.handle_unique" ON "Coach"("handle");

-- CreateIndex
CREATE UNIQUE INDEX "Coach.name_unique" ON "Coach"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Player.handle_unique" ON "Player"("handle");

-- CreateIndex
CREATE UNIQUE INDEX "Player.name_unique" ON "Player"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Player.slug_unique" ON "Player"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Team.handle_unique" ON "Team"("handle");

-- CreateIndex
CREATE UNIQUE INDEX "Team.name_unique" ON "Team"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Team.slug_unique" ON "Team"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Team.abbreviation_unique" ON "Team"("abbreviation");

-- CreateIndex
CREATE UNIQUE INDEX "Team.logo_unique" ON "Team"("logo");

-- AddForeignKey
ALTER TABLE "Coach" ADD FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ColorScheme" ADD FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
