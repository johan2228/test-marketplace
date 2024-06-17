import { IProductService } from '../../../interfaces/IProductService';
import { Product } from '../../domain/Product';

export class CreateProductUseCase {
  private productService: IProductService;

  constructor(productService: IProductService) {
    this.productService = productService;
  }

  async execute(productData: any): Promise<Product> {
    const product = new Product(
      null,
      productData.name,
      productData.description,
      productData.price,
      productData.category,
    );
    return await this.productService.createProduct(product);
  }
}
