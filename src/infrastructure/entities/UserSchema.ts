import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { SaleSchema } from './SaleSchema';

@Entity({ name: 'user_schema' })
export class UserSchema {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  email: string;

  @OneToMany(() => SaleSchema, sale => sale.user)
  sales: SaleSchema[];
}
