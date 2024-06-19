import { Cart } from '../../domain/Cart';

export interface ICartService {
  addProductToCart(userId: number, productId: number): Promise<Cart>;
  removeProductFromCart(userId: number, productId: number): Promise<Cart>;
  getCart(userId: number): Promise<Cart>;
}
