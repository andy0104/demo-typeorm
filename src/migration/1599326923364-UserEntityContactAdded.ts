import {MigrationInterface, QueryRunner} from "typeorm";

export class UserEntityContactAdded1599326923364 implements MigrationInterface {
    name = 'UserEntityContactAdded1599326923364'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `contactno` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `contactno`");
    }

}
