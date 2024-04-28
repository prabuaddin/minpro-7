/*
  Warnings:

  - The values [hiburan,musik,edukasi] on the enum `Category_name` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Category` MODIFY `name` ENUM('Hiburan', 'Musik', 'Edukasi') NOT NULL;
