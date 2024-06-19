import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { ProductSchema } from './ProductSchema';

@Entity()
export class CartSchema {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  userId: number;

  @ManyToMany(() => ProductSchema)
  @JoinTable()
  products: ProductSchema[];
}
