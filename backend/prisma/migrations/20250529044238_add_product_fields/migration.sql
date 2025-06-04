/*
  Warnings:

  - You are about to drop the column `scheduledDate` on the `DemoBooking` table. All the data in the column will be lost.
  - Added the required column `graph` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `powerSaving` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DemoBooking" DROP COLUMN "scheduledDate";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "benefits" TEXT[],
ADD COLUMN     "features" TEXT[],
ADD COLUMN     "graph" JSONB NOT NULL,
ADD COLUMN     "powerSaving" JSONB NOT NULL;
