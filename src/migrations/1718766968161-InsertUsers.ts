import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertUsers1718766968161 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
      INSERT INTO user_schema (username, email) VALUES 
      ('user1', 'user1@example.com'),
      ('user2', 'user2@example.com'),
      ('user3', 'user3@example.com');
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
      DELETE FROM user_schema WHERE email IN ('user1@example.com', 'user2@example.com', 'user3@example.com');
    `);
    }

}
