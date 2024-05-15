/*
  Warnings:

  - You are about to alter the column `expiredDate` on the `DiscountVoucher` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `expiredDate` on the `Points` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Added the required column `eventOrganizer` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `DiscountVoucher` MODIFY `expiredDate` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `Event` ADD COLUMN `eventOrganizer` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Points` MODIFY `expiredDate` DATETIME NOT NULL;
