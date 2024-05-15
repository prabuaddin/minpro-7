/*
  Warnings:

  - You are about to alter the column `expiredDate` on the `DiscountVoucher` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `expiredDate` on the `Points` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Made the column `referralNum` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `User_email_key` ON `User`;

-- AlterTable
ALTER TABLE `DiscountVoucher` MODIFY `expiredDate` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `Points` MODIFY `expiredDate` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `referralNum` VARCHAR(191) NOT NULL;
