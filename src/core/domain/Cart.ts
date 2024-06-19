import { Product } from './Product';

export class Cart {
  id: number;
  userId: number;
  products: Product[];

  constructor(id: number, userId: number, products: Product[]) {
    this.id = id;
    this.userId = userId;
    this.products = products;
  }
}
