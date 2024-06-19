import { SaleRepository } from "../../../infrastructure/repositories/SaleRepository";

export class GetSalesByCategoryAndMonthUseCase {
  private saleRepository: SaleRepository;

  constructor(saleRepository: SaleRepository) {
    this.saleRepository = saleRepository;
  }

  async execute(): Promise<any> {
    try {
      return await this.saleRepository.getSalesByCategoryAndMonth();
    } catch (error) {
      console.error('Error in GetSalesByCategoryAndMonthUseCase:', error);
      throw new Error('Failed to fetch sales data');
    }
  }
}
