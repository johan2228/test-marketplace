import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertSales1718805793402 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        INSERT INTO sale_schema ("userId", "productId", "quantity", "createdAt") VALUES
        (1, 1, 3, '2023-06-01'),
        (1, 2, 2, '2023-06-15'),
        (2, 1, 1, '2023-07-10'),
        (2, 3, 5, '2023-07-20'),
        (3, 1, 2, '2023-06-01'),
        (3, 1, 5, '2023-07-10');
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM sale_schema`);
    }
}
