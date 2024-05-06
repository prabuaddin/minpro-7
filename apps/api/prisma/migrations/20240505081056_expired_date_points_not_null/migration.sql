/*
  Warnings:

  - Made the column `expiredDate` on table `Points` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Points` MODIFY `expiredDate` DATETIME NOT NULL;
