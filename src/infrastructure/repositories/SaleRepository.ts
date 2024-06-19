import { Repository } from 'typeorm';
import { SaleSchema } from '../entities/SaleSchema';
import { AppDataSource } from '../../../ormconfig';

export class SaleRepository {
  private saleRepository: Repository<SaleSchema>;

  constructor() {
    this.saleRepository = AppDataSource.getRepository(SaleSchema);
  }

  async getSalesByCategoryAndMonth(): Promise<any> {
    return this.saleRepository
      .createQueryBuilder('sale')
      .leftJoinAndSelect('sale.product', 'product')
      .select('product.category', 'category')
      .addSelect("TO_CHAR(sale.createdAt, 'YYYY-MM')", 'month')
      .addSelect('SUM(sale.quantity)', 'totalQuantity')
      .groupBy('product.category')
      .addGroupBy("TO_CHAR(sale.createdAt, 'YYYY-MM')")
      .getRawMany();
  }
}
