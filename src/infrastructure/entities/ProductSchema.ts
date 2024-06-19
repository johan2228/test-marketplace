import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';
import { Product } from '../../core/domain/Product';
import { SaleSchema } from './SaleSchema';

@Entity({ name: 'product' })
export class ProductSchema {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'decimal' })
  price: number;

  @Column({ type: 'text' })
  category: string;

  @OneToMany(() => SaleSchema, sale => sale.product)
  sales: SaleSchema[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  static toSchema(domain: Product): ProductSchema {
    const entity = new ProductSchema();
    if (!domain) return entity;
    if (domain.id) entity.id = domain.id;
    entity.name = domain.name;
    entity.description = domain.description;
    entity.price = domain.price;
    entity.category = domain.category;

    return entity;
  }

  static toDomain(schema: ProductSchema): Product {
    if (!schema) return null;
    return new Product(
      schema.id,
      schema.name,
      schema.description,
      schema.price,
      schema.category,
      schema.createdAt,
      schema.updatedAt,
    );
  }
}
