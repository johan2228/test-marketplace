import { MigrationInterface, QueryRunner } from "typeorm";

export class TableSalesAndRelationships1718805759682 implements MigrationInterface {
    name = 'TableSalesAndRelationships1718805759682'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_schema" RENAME COLUMN "username" TO "name"`);
        await queryRunner.query(`CREATE TABLE "sale_schema" ("id" SERIAL NOT NULL, "quantity" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, "productId" integer, CONSTRAINT "PK_d303d4ee9b97f4965bfb0bc0dc6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "sale_schema" ADD CONSTRAINT "FK_a923abecb50675c939aabb68afe" FOREIGN KEY ("userId") REFERENCES "user_schema"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sale_schema" ADD CONSTRAINT "FK_9f87506cf998c927efd48acab6f" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sale_schema" DROP CONSTRAINT "FK_9f87506cf998c927efd48acab6f"`);
        await queryRunner.query(`ALTER TABLE "sale_schema" DROP CONSTRAINT "FK_a923abecb50675c939aabb68afe"`);
        await queryRunner.query(`DROP TABLE "sale_schema"`);
        await queryRunner.query(`ALTER TABLE "user_schema" RENAME COLUMN "name" TO "username"`);
    }

}
