import {MigrationInterface, QueryRunner} from "typeorm";

export class UserProfileRelationAdded1599465614571 implements MigrationInterface {
    name = 'UserProfileRelationAdded1599465614571'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `profile` (`id` int NOT NULL AUTO_INCREMENT, `isActive` tinyint NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `age` int NOT NULL, `contactno` varchar(255) NOT NULL, `profileId` int NULL, UNIQUE INDEX `REL_9466682df91534dd95e4dbaa61` (`profileId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_9466682df91534dd95e4dbaa616` FOREIGN KEY (`profileId`) REFERENCES `profile`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_9466682df91534dd95e4dbaa616`");
        await queryRunner.query("DROP INDEX `REL_9466682df91534dd95e4dbaa61` ON `user`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `profile`");
    }

}
