/*
  Warnings:

  - You are about to drop the column `refferalNum` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[referralNum]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `User_refferalNum_key` ON `User`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `refferalNum`,
    ADD COLUMN `referralNum` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_referralNum_key` ON `User`(`referralNum`);
