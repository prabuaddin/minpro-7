/*
  Warnings:

  - You are about to drop the column `eventId` on the `Category` table. All the data in the column will be lost.
  - You are about to alter the column `expiredDate` on the `DiscountVoucher` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `expiredDate` on the `Points` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Added the required column `categoryId` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Category` DROP FOREIGN KEY `Category_eventId_fkey`;

-- AlterTable
ALTER TABLE `Category` DROP COLUMN `eventId`;

-- AlterTable
ALTER TABLE `DiscountVoucher` MODIFY `expiredDate` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `Event` ADD COLUMN `categoryId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Points` MODIFY `expiredDate` DATETIME NOT NULL;

-- AddForeignKey
ALTER TABLE `Event` ADD CONSTRAINT `Event_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
