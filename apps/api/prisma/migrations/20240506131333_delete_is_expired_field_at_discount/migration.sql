/*
  Warnings:

  - You are about to drop the column `isExpired` on the `DiscountVoucher` table. All the data in the column will be lost.
  - You are about to alter the column `expiredDate` on the `DiscountVoucher` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `expiredDate` on the `Points` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `DiscountVoucher` DROP COLUMN `isExpired`,
    MODIFY `expiredDate` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `Points` MODIFY `expiredDate` DATETIME NOT NULL;
