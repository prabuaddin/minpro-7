-- AlterTable
ALTER TABLE `User` MODIFY `refferalNum` VARCHAR(191) NULL,
    MODIFY `pointsBalance` INTEGER NOT NULL DEFAULT 0;
