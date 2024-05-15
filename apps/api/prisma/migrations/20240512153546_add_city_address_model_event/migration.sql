/*
  Warnings:

  - You are about to alter the column `expiredDate` on the `DiscountVoucher` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the column `locationId` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `Event` table. All the data in the column will be lost.
  - You are about to alter the column `expiredDate` on the `Points` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the column `inputRef` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `referralNum` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Location` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[refferalNum]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `address` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endTime` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `refferalNum` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Event` DROP FOREIGN KEY `Event_locationId_fkey`;

-- DropIndex
DROP INDEX `User_email_key` ON `User`;

-- DropIndex
DROP INDEX `User_referralNum_key` ON `User`;

-- AlterTable
ALTER TABLE `DiscountVoucher` MODIFY `expiredDate` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `Event` DROP COLUMN `locationId`,
    DROP COLUMN `time`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `endTime` TIME NOT NULL,
    ADD COLUMN `startTime` TIME NOT NULL;

-- AlterTable
ALTER TABLE `Points` MODIFY `expiredDate` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `inputRef`,
    DROP COLUMN `referralNum`,
    ADD COLUMN `refferalNum` VARCHAR(191) NOT NULL,
    ADD COLUMN `useReffReg` BOOLEAN NOT NULL DEFAULT false,
    ALTER COLUMN `pointsBalance` DROP DEFAULT;

-- DropTable
DROP TABLE `Location`;

-- CreateIndex
CREATE UNIQUE INDEX `User_refferalNum_key` ON `User`(`refferalNum`);
