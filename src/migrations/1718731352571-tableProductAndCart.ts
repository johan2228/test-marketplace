import { MigrationInterface, QueryRunner } from "typeorm";

export class TableProductAndCart1718731352571 implements MigrationInterface {
    name = 'TableProductAndCart1718731352571'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "name" text NOT NULL, "description" text NOT NULL, "price" numeric NOT NULL, "category" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cart_schema" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_440e8d777f1327bcad012ada956" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cart_schema_products_product" ("cartSchemaId" integer NOT NULL, "productId" integer NOT NULL, CONSTRAINT "PK_c7e31f8c8af4fa4ae800cfd4bd5" PRIMARY KEY ("cartSchemaId", "productId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_10f132f6d3bbe9548e65ca7bff" ON "cart_schema_products_product" ("cartSchemaId") `);
        await queryRunner.query(`CREATE INDEX "IDX_794e08c8c4aa87f6d7773a3427" ON "cart_schema_products_product" ("productId") `);
        await queryRunner.query(`ALTER TABLE "cart_schema_products_product" ADD CONSTRAINT "FK_10f132f6d3bbe9548e65ca7bff5" FOREIGN KEY ("cartSchemaId") REFERENCES "cart_schema"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cart_schema_products_product" ADD CONSTRAINT "FK_794e08c8c4aa87f6d7773a34279" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart_schema_products_product" DROP CONSTRAINT "FK_794e08c8c4aa87f6d7773a34279"`);
        await queryRunner.query(`ALTER TABLE "cart_schema_products_product" DROP CONSTRAINT "FK_10f132f6d3bbe9548e65ca7bff5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_794e08c8c4aa87f6d7773a3427"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_10f132f6d3bbe9548e65ca7bff"`);
        await queryRunner.query(`DROP TABLE "cart_schema_products_product"`);
        await queryRunner.query(`DROP TABLE "cart_schema"`);
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
