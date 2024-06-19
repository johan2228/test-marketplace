import { MigrationInterface, QueryRunner } from "typeorm";

export class TableUser1718748352575 implements MigrationInterface {
    name = 'TableUser1718748352575'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_schema" ("id" SERIAL NOT NULL, "username" text NOT NULL, "email" text NOT NULL, CONSTRAINT "PK_a8d4ecce27b86a1bff2ddaf3031" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user_schema"`);
    }

}
