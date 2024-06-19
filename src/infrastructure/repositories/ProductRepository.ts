import { IProductService } from '../../core/application/interfaces/IProductService';
import { Product } from '../../core/domain/Product';
import { Database } from '../database/dbManager';
import { ProductSchema } from '../entities/ProductSchema';
import { Repository } from 'typeorm';

export class ProductRepository implements IProductService {
  private productRepository: Repository<ProductSchema>;

  private async initializeRepository() {
    if (!this.productRepository) {
      this.productRepository = await Database.getRepository(ProductSchema);
    }
  }

  async listProducts(
    page: number,
    pageSize: number,
    search: string,
  ): Promise<Product[]> {
    try {
      await this.initializeRepository();
      const query = this.productRepository.createQueryBuilder('product');

      if (search) {
        query.where(
          'product.name ILIKE :search OR product.description ILIKE :search',
          { search: `%${search}%` },
        );
      }

      const products = await query
        .skip((page - 1) * pageSize)
        .take(pageSize)
        .getMany();

      return products.map((schema) => ProductSchema.toDomain(schema));
    } catch (error) {
      console.error('Error in ProductRepository listProducts:', error);
      throw new Error('Failed to fetch products');
    }
  }

  async createProduct(product: Product): Promise<Product> {
    try {
      await this.initializeRepository();
      const productEntity = ProductSchema.toSchema(product);
      const productCreate = await this.productRepository.save(productEntity);
      return ProductSchema.toDomain(productCreate);
    } catch (error) {
      console.error('Error in ProductRepository createProduct:', error);
      throw new Error('Failed to create product');
    }
  }

  async getProductById(productId: number): Promise<Product> {
    try {
      await this.initializeRepository();
      console.log('productid repository', productId);
      const product = await this.productRepository.findOne({
        where: { id: productId },
      });
      if (!product) throw new Error('Product not found');
      return ProductSchema.toDomain(product);
    } catch (error) {
      console.error('Error in ProductRepository getProductById:', error);
      throw new Error('Failed to get product details');
    }
  }
}
