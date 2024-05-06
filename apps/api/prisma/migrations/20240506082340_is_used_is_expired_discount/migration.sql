/*
  Warnings:

  - You are about to alter the column `expiredDate` on the `DiscountVoucher` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `expiredDate` on the `Points` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `DiscountVoucher` ADD COLUMN `isExpired` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `isUsed` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `expiredDate` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `Points` MODIFY `expiredDate` DATETIME NOT NULL;
