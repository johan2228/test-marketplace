import { IProductService } from '../interfaces/IProductService';
import { Product } from '../../domain/Product';

export class GetProductDetailsUseCase {
  private productService: IProductService;

  constructor(productService: IProductService) {
    this.productService = productService;
  }

  async execute(productId: number): Promise<Product> {
    try {
      return await this.productService.getProductById(productId);
    } catch (error) {
      console.error('Error in GetProductDetailsUseCase:', error);
      throw new Error('Failed to get product details');
    }
  }
}
