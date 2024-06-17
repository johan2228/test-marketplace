import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Product as ProductDomain } from '../core/domain/Product';

@Entity()
export default class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "decimal" })
  price: number;

  @Column({ type: "text" })
  category: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  static toEntity(domain: ProductDomain): Product {
    const entity = new Product();
    if (!domain) return entity;
    if (domain.id) entity.id = domain.id;
    entity.name = domain.name;
    entity.description = domain.description;
    entity.price = domain.price;
    entity.category = domain.category;
    return entity;
  }

  static toDomain(schema: ProductDomain): Product {
    if (!schema) return null;
    return new ProductDomain(
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
