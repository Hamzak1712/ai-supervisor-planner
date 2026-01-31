/*
  Warnings:

  - You are about to drop the column `course` on the `StudentProfile` table. All the data in the column will be lost.
  - You are about to drop the column `capacity` on the `SupervisorProfile` table. All the data in the column will be lost.
  - You are about to drop the column `currentLoad` on the `SupervisorProfile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "StudentProfile" DROP COLUMN "course",
ADD COLUMN     "skills" TEXT,
ALTER COLUMN "fullName" DROP NOT NULL;

-- AlterTable
ALTER TABLE "SupervisorProfile" DROP COLUMN "capacity",
DROP COLUMN "currentLoad",
ADD COLUMN     "maxCapacity" INTEGER NOT NULL DEFAULT 5,
ALTER COLUMN "fullName" DROP NOT NULL;
