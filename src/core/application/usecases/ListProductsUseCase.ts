import { IProductService } from '../../../interfaces/IProductService';
import { Product } from '../../domain/Product';


export class ListProductsUseCase {
  private productService: IProductService;

  constructor(productService: IProductService) {
    this.productService = productService;
  }

  async execute(page: number, pageSize: number, search: string): Promise<Product[]> {
    try {
      console.log('listProducts entro usecase')
      return await this.productService.listProducts(page, pageSize, search);
    } catch (error) {
      console.error('Error in ListProductsUseCase:', error);
      throw new Error('Failed to list products');
    }
  }
}
