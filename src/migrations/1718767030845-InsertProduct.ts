import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertProduct1718767030845 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
      INSERT INTO product (name, description, price, category, "createdAt", "updatedAt")
      VALUES
        ('Product 1', 'Description 1', 10.0, 'Category 1', NOW(), NOW()),
        ('Product 2', 'Description 2', 20.0, 'Category 2', NOW(), NOW()),
        ('Product 3', 'Description 3', 30.0, 'Category 3', NOW(), NOW());
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM product WHERE name IN ('Product 1', 'Product 2', 'Product 3');`);
    }

}
