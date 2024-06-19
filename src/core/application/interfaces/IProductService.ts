import { Product } from '../../domain/Product';

export interface IProductService {
  listProducts(
    page: number,
    pageSize: number,
    search: string,
  ): Promise<Product[]>;
  createProduct(product: Product): Promise<Product>;
  getProductById(productId: number): Promise<Product>;
}
