import { Repository } from 'typeorm';
import { ProductEntity } from '../../entities/index';
import { IProductService } from '../../interfaces/IProductService';
import { Product } from '../../core/domain/Product';
import { AppDataSource } from '../../../ormconfig';

export class ProductRepository implements IProductService {
  private productRepository: Repository<Product>;

  constructor() {
    this.productRepository = AppDataSource.getRepository(Product);
  }

  async createProduct(product: Product): Promise<Product> {
    const productEntity = ProductEntity.toEntity(product);
    const productCreate = await this.productRepository.save(productEntity);
    return ProductEntity.toDomain(productCreate);
  }

  async listProducts(page: number, pageSize: number, search: string): Promise<Product[]> {
    try {
      console.log('listProducts entro repository')
      const query = this.productRepository.createQueryBuilder('product');

      if (search) {
        query.where('product.name ILIKE :search OR product.description ILIKE :search', { search: `%${search}%` });
      }

      const products = await query
        .skip((page - 1) * pageSize)
        .take(pageSize)
        .getMany();

      return products.map((product) => ProductEntity.toDomain(product));
    } catch (error) {
      console.error('Error in ProductRepository listProducts:', error);
      throw new Error('Failed to fetch products');
    }
  }

  async getProductById(productId: number): Promise<Product> {
    try {
      const product = await this.productRepository.findOne({ where: { id: productId } });
      if (!product) throw new Error('Product not found');
      return ProductEntity.toDomain(product);
    } catch (error) {
      console.error('Error in ProductRepository getProductById:', error);
      throw new Error('Failed to get product details');
    }
  }

}
