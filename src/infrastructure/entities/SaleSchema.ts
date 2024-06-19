import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, JoinColumn } from 'typeorm';
import { UserSchema } from './UserSchema';
import { ProductSchema } from './ProductSchema';

@Entity({ name: 'sale_schema' })
export class SaleSchema {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserSchema, user => user.sales)
  @JoinColumn({ name: 'userId' })
  user: UserSchema;

  @ManyToOne(() => ProductSchema, product => product.sales)
  @JoinColumn({ name: 'productId' })
  product: ProductSchema;

  @Column({ type: 'int' })
  quantity: number;

  @CreateDateColumn()
  createdAt: Date;

  static toDomain(saleSchema: SaleSchema): any {
    return {
      id: saleSchema.id,
      userId: saleSchema.user.id,
      productId: saleSchema.product.id,
      quantity: saleSchema.quantity,
      createdAt: saleSchema.createdAt,
    };
  }
}
