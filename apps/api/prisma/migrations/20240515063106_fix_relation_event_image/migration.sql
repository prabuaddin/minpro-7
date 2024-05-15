/*
  Warnings:

  - You are about to alter the column `expiredDate` on the `DiscountVoucher` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the column `categoryId` on the `Event` table. All the data in the column will be lost.
  - You are about to alter the column `expiredDate` on the `Points` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - A unique constraint covering the columns `[eventId]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `eventId` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Event` DROP FOREIGN KEY `Event_categoryId_fkey`;

-- AlterTable
ALTER TABLE `Category` ADD COLUMN `eventId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `DiscountVoucher` MODIFY `expiredDate` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `Event` DROP COLUMN `categoryId`;

-- AlterTable
ALTER TABLE `Points` MODIFY `expiredDate` DATETIME NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Category_eventId_key` ON `Category`(`eventId`);

-- AddForeignKey
ALTER TABLE `Category` ADD CONSTRAINT `Category_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `Event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
