-- CreateTable
CREATE TABLE `Points` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `balance` INTEGER NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Points` ADD CONSTRAINT `Points_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`uid`) ON DELETE RESTRICT ON UPDATE CASCADE;
