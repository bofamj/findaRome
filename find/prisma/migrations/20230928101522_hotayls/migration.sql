/*
  Warnings:

  - You are about to drop the column `rating` on the `Hotels` table. All the data in the column will be lost.
  - Added the required column `location` to the `Hotels` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hotels" DROP COLUMN "rating",
ADD COLUMN     "location" TEXT NOT NULL,
ALTER COLUMN "bathrooms" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "lat" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "lng" SET DATA TYPE DOUBLE PRECISION;
